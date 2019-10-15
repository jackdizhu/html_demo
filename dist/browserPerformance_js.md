## 浏览器性能优化-JS(prefetch, preload, dns-prefetch，defer和async)

* 来源: https://segmentfault.com/a/1190000011577248

```text
众所周知，JS的加载和执行会阻塞浏览器渲染，所以目前业界普遍推荐把script放到之前，以解决js执行时找不到dom等问题。但随着现代浏览器的普及，浏览器为我们提供了更多强大的武器，合理利用，方可大幅提高页面加载速度。 
```
### 理解渲染过程（HTML Parser）

首先我们从浏览器的角度解释一下从输入URL到页面展示经历了些什么，以如下html文档举例

```html
<html>
<head>
    <link rel="stylesheet" type="text/css" href="/style.css">
    <script type="text/javascript" src="/header.js"></script>
</head>
<body>
  <p>Text</p>
  <script type="text/javascript" src="/main.js"></script>
</body>
</html>
```

浏览器自上而下读取html文档（此过程叫html parser），当发现style.css文件时，浏览器parser停下来去搞css，等style.css下载并解析完毕，浏览器继续parser。紧接着发现header.js， 于是html parser又停了，浏览器下载并执行完header.js，继续parser。此时屏幕上还什么都没有。...parser，发现\<p>，遂将p中文字展示了出来。紧接着又发现main.js，浏览器又停下parser，下载并执行完main.js才继续parser，直到页面渲染完毕。

我们假设header.js中只有一行代码console.log('header')， 但服务器响应很慢，要10秒才能把它返回给浏览器，浏览器执行这段代码需要1ms，那在这 10s+1ms 内，页面将一直空白。浏览器执行JS的时间取决于代码质量和硬件，并不是前端工程师随便可以优化的，所以优化的重点在JS的下载时间。

### 核心：减少JS下载时间

#### 预先解析DNS

非常简单，效果立竿见影，加快页面加载时间，多用于预解析CDN的地址的DNS

```html
<!--在head标签中，越早越好-->
<link rel="dns-prefetch" href="//example.com">
```

##### Preload

浏览器会在遇到如下link标签时，立刻开始下载main.js(不阻塞parser)，并放在内存中，但不会执行其中的JS语句。
只有当遇到script标签加载的也是main.js的时候，浏览器才会直接将预先加载的JS执行掉。

```html
<link rel="preload" href="/main.js" as="script">
```

##### Prefetch

浏览器会在空闲的时候，下载main.js, 并缓存到disk。当有页面使用的时候，直接从disk缓存中读取。其实就是把决定是否和什么时间加载这个资源的决定权交给浏览器。

如果prefetch还没下载完之前，浏览器发现script标签也引用了同样的资源，浏览器会再次发起请求，这样会严重影响性能的，加载了两次，，所以不要在当前页面马上就要用的资源上用prefetch，要用preload。

```html
<link href="main.js" rel="prefetch">
```

### JS在什么时候执行的（defer和async）

面我们的例子中，script标签都是在没有多余属性的情况下执行的，只要下载过程结束，浏览器就会将JS执行掉。
defer和async是script标签的两个属性，用于在不阻塞页面文档解析的前提下，控制脚本的下载和执行。

defer，async与下载时机也有关，具体看这张图。

![defer和async](./img/deferAsync.jpeg)

### 完整方案

前面两节帮我们弄懂了JS的下载和执行时机，那什么样的页面才是完美符合现代浏览器的那？其实关键在于的preload和prefetch！提前告知浏览器，我们的网站马上要用的是什么，以后可能要用的是什么，浏览器才能更快的渲染页面。下面是一段实例代码

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Faster</title>
  <link rel="dns-prefetch" href="//cdn.com/">
  <link rel="preload" href="//js.cdn.com/currentPage-part1.js" as="script">
  <link rel="preload" href="//js.cdn.com/currentPage-part2.js" as="script">
  <link rel="preload" href="//js.cdn.com/currentPage-part3.js" as="script">

  <link rel="prefetch" href="//js.cdn.com/prefetch.js">
</head>
<body>

<script type="text/javascript" src="//js.cdn.com/currentPage-part1.js" defer></script>
<script type="text/javascript" src="//js.cdn.com/currentPage-part2.js" defer></script>
<script type="text/javascript" src="//js.cdn.com/currentPage-part3.js" defer></script>
</body>
</html>
```

首先，Parser在遇到head中preload时开始下载JS，读到script标签的时候，如果已经下载完了，直接按顺序执行之。如果没下载完，则会等到下载完再执行。这样就可以在刚进入页面时开始非阻塞的下载JS代码了。

其次，页面会在空闲时，加载prefetch的JS，如果之后页面发生跳转，跳转的目标页面引入了prefetch.js，浏览器会直接从disk缓存中读取执行。

将script标签依然放在\</body>之前，并增加defer标签，确保老浏览器兼容，并在所有DOM元素解析完成之后执行其中的代码。
