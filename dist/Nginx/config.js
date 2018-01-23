/*
nginx 的 upstream目前支持 4 种方式的分配
1)、轮询（默认）
      每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。
2)、weight
      指定轮询几率，weight和访问比率成正比，用于后端服务器性能不均的情况。
2)、ip_hash
      每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。
3)、fair（第三方）
      按后端服务器的响应时间来分配请求，响应时间短的优先分配。
4)、url_hash（第三方）
weight=1 权重 max_fails=2 允许请求失败的次数 fail_timeout=5s 失败后的暂停时间
backup 后备的服务器 其他服务器无法正常工作是 运行
*/

upstream webserver {
  server  127.0.0.1:8000 weight=1 max_fails=2  fail_timeout=5s;
  server 127.0.0.1:3000 weight=1 max_fails=2  fail_timeout=5s;
  server 127.0.0.1:8080 backup;
  ip_hash;
}

server {
  server_name  localhost;
  location / { # 转发所有请求
      proxy_pass  http://webserver; #此处http://webserver后面不能加/，如果加了会提示语法错误
      proxy_set_header X-Real-IP $remote_addr;
  }
  location ~ \.(gif|jpg|png)$ { # 转发图片资源请求
      root /data/images;
  }
}
