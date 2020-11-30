# todo_sample_nuxt

## 起動方法

`git clone git@github.com:sonarAIT/todo_sample_nuxt.git`で clone する

`cd todo_sample_nuxt`で移動．

`docker network create todo_network`を実行．

`cd nuxt && yarn`を実行．

2 つターミナルを立ち上げ，`todo_sample`内で`docker-compose up`を

`nuxt`内で`yarn dev`をそれぞれ実行することで起動できる．

（以後，`docker-compose up`と`yarn dev`だけでよい．）

データベースをリセットしたくなった時は，todo_sample_nuxt 以下のディレクトリにいることを確認した上で，

```
docker-compose down
```

を実行する．
