FROM butch/sdc-nginx:1.0.0

MAINTAINER Charlie "Butch" Santos <cusantos@globe.com.ph>

ARG username
ARG password

RUN apt-get install apache2-utils -y && \
    htpasswd -bc /etc/nginx/.htpasswd $username $password
