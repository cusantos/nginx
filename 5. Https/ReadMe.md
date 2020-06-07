#### Generate Self-Signed Certificate 
```
 $ mkdir -p docker/ssl
 $ openssl req -x509 -days 365 -nodes -newkey rsa:2048 -keyout ./docker/ssl/self.key -out ./docker/ssl/self.crt
```

#### Create Dockerfile
```
$ mkdir -p docker/ssl
$ cd docker
$ touch Dockerfile
```

#### Paste this to the created Dockerfile
```
FROM butch/sdc-nginx:1.0.0
MAINTAINER Charlie "Butch" Santos <cusantos@globe.com.ph>
RUN mkdir -p /etc/nginx/ssl
COPY ./ssl/ /etc/nginx/ssl/
```
