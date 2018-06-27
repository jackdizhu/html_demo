
* css 常用class
* flex items-center content-center justify-center
* // 横向 对齐方式
* justify-start justify-end justify-center justify-between justify-around
* // 纵向 对齐方式
* items-start items-end items-center items-stretch items-baseline
* // 多行内容 上下对齐方式
* content-start content-end content-center content-stretch content-between content-around
* // col- 栅格布局 中 小 极
* col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12

``` css

*{
  padding: 0;
  margin: 0;
  -webkit-box-sizing:border-box;
     -moz-box-sizing:border-box;
          box-sizing:border-box;
}

.flexCenterCen {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
// 横向 对齐方式
.justify-around {
    -ms-flex-pack: distribute;
    justify-content: space-around;
}
.justify-between {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.justify-center {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.justify-end {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.justify-start {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
// 纵向 对齐方式
.items-stretch {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
}
.items-baseline {
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
}
.items-center, .flex-center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.items-end {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
}
.items-start {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
}
// 多行内容 上下对齐方式
.content-around {
    -ms-flex-line-pack: distribute;
    align-content: space-around;
}
.content-between {
    -ms-flex-line-pack: justify;
    align-content: space-between;
}
.content-center {
    -ms-flex-line-pack: center;
    align-content: center;
}
.content-end {
    -ms-flex-line-pack: end;
    align-content: flex-end;
}
.content-start {
    -ms-flex-line-pack: start;
    align-content: flex-start;
}

// 文本超出隐藏
.ellipsis-3-lines {
    -webkit-line-clamp: 3;
}
.ellipsis-2-lines, .ellipsis-3-lines {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

// 表格样式处理
table
  width 100%
  th,td
    padding 4px 3px
    height 32px
  th
    border-left 1px solid #eee
    border-bottom 1px solid #eee
    border-top 1px solid #eee
  th:last-child
    border-right 1px solid #eee
  td
    text-align center
    border-left 1px solid #eee
    border-bottom 1px solid #eee
  td:last-child
    border-right 1px solid #eee
```
