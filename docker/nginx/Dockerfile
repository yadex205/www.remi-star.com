FROM amazonlinux:2

RUN amazon-linux-extras install -y nginx1.12
COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /etc/nginx/ssl
RUN openssl req -batch -x509 -newkey rsa:2048 -nodes -sha256 \
                -subj /CN=localhost/O=oreore/ \
                -days 3650 \
                -keyout /etc/nginx/ssl/nginx.key \
                -out /etc/nginx/ssl/nginx.crt

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 443
CMD ["nginx"]
