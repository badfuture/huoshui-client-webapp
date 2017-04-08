# 活水桌面客户端

## 本地安装

git clone repo到本地之后，安装npm组件

```
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

启动dev服务器

```
npm run dev
```

## 部署
在staging server和local环境安装PM2
```
npm install pm2 -g
```

local生成SSH key，并将public key加入要部署到的服务器
```
ssh-keygen -t rsa
ssh-copy-id -i path/to/my/key user@staging_hostname
```

进行部署配置
```
cd server
npm run deploy:dev:setup
```

部署
```
npm run deploy:dev
```

## 维护人员

* **游侠** -  [paladinze github](https://github.com/paladinze)

## 授权许可

此项目使用 MIT 授权许可 - 更多细节查看 [LICENSE.md](LICENSE.md)
