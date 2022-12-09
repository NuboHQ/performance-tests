# Nubo Performance Test

```
PORT=5000 pm2 start yarn --name test -- start
PORT=5000 pm2 start ../../empty.js --name test --interpreter="bun" --interpreter-args="start"
```

```
cockroach start-single-node \
--insecure \
--listen-addr=localhost:26257 \
--http-addr=localhost:8080 \
--background

psql -h localhost -p 26257 -U root
```
