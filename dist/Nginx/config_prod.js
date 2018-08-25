#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;

    gzip  on;

    upstream app {
        server 127.0.0.1:8081 weight=1 fail_timeout=3s;
        server 127.0.0.1:8082 weight=1 fail_timeout=3s;
        server 127.0.0.1:8080 backup;
        ip_hash;
    }

    server {
        listen       80;
        server_name  localhost;
        location / {
            proxy_pass http://app;
            proxy_set_header Host $host;
            proxy_set_header S-Forwarded-For $remote_addr;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

    server {
        listen       443;
        ssl on;
        server_name  hb.jionly.com;

        ssl_certificate      /etc/nginx/cert/server.crt;
        ssl_certificate_key  /etc/nginx/cert/server.key;

        ssl_session_timeout  5m;

        location / {
          proxy_pass http://app;
          proxy_set_header Host $host;
          proxy_set_header S-Forwarded-For $remote_addr;
        }
    }
}
