# 活水桌面客户端

## 部署
在staging server和production server安装Docker
[docker installtion guide](https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/)

只部署活水webapp (默认使用live production backend)
```
docker run -d -p 10084:10084 huoshui/huoshui-webapp:1.1
```

若需自己部署后端，参考 [huoshui-backend-api](https://github.com/badfuture/huoshui-backend-api)

## 本地开发安装

git clone repo到本地之后，安装npm组件

```
export NODE_ENV=development
npm install
```

build global CSS

```
cd app/styles/semantic
gulp build
```

build production site

```
npm run build
```

启动dev服务器 (连接到production后端）

```
export NODE_ENV=production
npm run dev
```

启动dev服务器 (连接到本地后端，参考 [huoshui-backend-api](https://github.com/badfuture/huoshui-backend-api)）

```
export NODE_ENV=development
npm run dev
```

## 维护人员

* **游侠** -  [paladinze github](https://github.com/paladinze)

## 授权许可

此项目使用 MIT 授权许可 - 更多细节查看 [LICENSE.md](LICENSE.md)
