#!/bin/sh

psql -U ${POSTGRES_USER} -d ${POSTGRES_DB} -c 'CREATE USER ${CHAT_USER} WITH ENCRYPTED PASSWORD ${CHAT_PASSWORD}'