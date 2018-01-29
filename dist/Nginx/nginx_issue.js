# 处理 大型单页 index.html 缓存问题
location / {
    add_header Cache-Control "no-cache, no-store";
    root    /root/html/dist;
    index    index.html index.htm;
    try_files $uri $uri/ /index.html;
}

location /static/ {
     root    /root/html/dist;
}
