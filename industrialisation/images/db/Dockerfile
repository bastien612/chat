FROM postgres:11.3-alpine

COPY ./init_scripts /docker-entrypoint-initdb.d
RUN dos2unix /docker-entrypoint-initdb.d/*.sh