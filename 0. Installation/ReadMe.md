#### Installation

 - Via Package Manager
   ```
    # Debian
    $ apt install update -y
    $ apt install nginx -y
    $ nginx -V                      # to check version
   ``` 
   ```
    # Cent OS
    $ yum update -y
    $ yum install epel-release -y   # nginx package will be available to this repo.
    $ apt install nginx -y
    $ service nginx start           # Nginx will not automatically start for this case.
    $ nginx -V                      # to check version
    ``` 
   
 - Via Source
   ```
    # Debian 
    $ apt-get update -y 
    $ apt-get install -y apt-utils  # tools needed on this demo
    $ apt-get install -y build-essential
      # additional library needs to install to configure nginx. 
    $ apt-get install -y libpcre3 libpcre3-dev zlib1g zlib1g-dev libssl-dev -y   
    $ apt-get install -y wget
    $ wget https://nginx.org/download/nginx-1.18.0.tar.gz
    $ tar -zxvf nginx-1.18.0.tar.gz
    $ mv nginx-1.18.0 nginx && rm -f nginx-1.18.0.tar.gz
    $ cd nginx
    $ ./configure \
      --sbin-path=/usr/bin/nginx \
      --conf-path=/etc/nginx/nginx.conf \
      --error-log-path=/var/log/nginx/error.log \
      --http-log-path=/var/log/nginx/access.log  \
      --with-pcre \
      --pid-path=/var/run/nginx.pid \
      --with-http_ssl_module
    $ make                              # to compile
    $ make install                      # to install 
   ``` 
 - Via [Docker](https://hub.docker.com/_/nginx)
    ``` 
    $ docker pull nginx   
    ```
