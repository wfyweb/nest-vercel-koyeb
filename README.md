## Deploy nest.js to vercel and koyeb

提交 nestjs 代码后自动部署到 vercel 和 koyeb 平台，prisma 数据库用 neon

### 测试地址

GET:

- https://sufficient-marianna-nnnnnn-e6e8714a.koyeb.app/users
- https://nest-vercel-ten.vercel.app/users

POST:

```json
{
  "name": "zz",
  "email": "zz@zz.zz"
}
```

- https://sufficient-marianna-nnnnnn-e6e8714a.koyeb.app/users
- https://nest-vercel-ten.vercel.app/users

### 部署到 vercel

1. 根目录需要添加 `vercel.json`

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "src/main.ts",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "src/main.ts",
         "methods": [
           "GET",
           "POST",
           "PUT",
           "PATCH",
           "OPTIONS",
           "DELETE",
           "HEAD",
           "CONNECT",
           "TRACE"
         ]
       }
     ]
   }
   ```

2. 需要在postinstall的时候执行 prisma generate 脚本

   ```json
   "scripts": {
       ...
       "postinstall": "pnpm dlx prisma generate"
   },
   ```

### 部署到 koyeb

1. start 命令改成对应的 start:prod

    ```json
    "scripts": {
        "start": "node dist/main",
        ...
    },
    ```

2. package.json 中指明 pnpm 版本号

   ```json
   {
     "name": "nest-vercel-koyeb",
     "version": "0.0.1",
     "packageManager": "pnpm@9.7.1"
     ...
   }
   ```

### 使用的服务

- Web：
  - https://www.koyeb.com/
  - https://vercel.com/
- 数据库
  - https://neon.tech/


