# 图片 CDN 部署（Cloudflare Pages 免费方案）

## 当前配置

图片域名：`https://round-forest-8996.szqmayday.workers.dev`（Cloudflare Workers）。

`.env.production` 已配置这个域名，执行 `npm run build` 即生效。GitHub Pages 工作流也已设置同一默认值，可通过仓库变量 `VITE_ASSET_BASE_URL` 覆盖。Vercel 构建会读取 `.env.production`；若平台已有同名环境变量，需更新或删除旧值。

开发模式默认使用本地图片。如需开发时也使用 CDN，在 `.env.local` 中设置：

```dotenv
VITE_ASSET_BASE_URL=https://round-forest-8996.szqmayday.workers.dev
```

验证图片地址：`https://round-forest-8996.szqmayday.workers.dev/assets/scene-aaa.png`。首页背景和其余 7 张图片也沿用 `/assets/文件名` 路径。

## 初次上传参考

`cdn-upload.zip` 已包含 public 内全部 8 张图片，保留 assets 目录和原文件名；还包含缓存与跨域头以及 404 页面。

1. 登录 Cloudflare Dashboard，进入 Workers & Pages，创建 Pages 项目，选择 Direct Upload（上传静态资源）。
2. 项目名称建议 `oujing-cloud-gaming-assets`，上传 `cdn-upload.zip` 并部署。
3. 复制实际分配的 `https://<项目名称>.pages.dev` 域名，打开任意 `/assets/scene-aaa.png` 确认图片可以访问。
4. 本地复制 `.env.example` 为 `.env.local`，设置 `VITE_ASSET_BASE_URL=https://<实际项目名称>.pages.dev`，再运行 `npm run build`。开发服务器需要重启。
5. GitHub Pages 部署：在仓库 Settings → Secrets and variables → Actions → Variables 中添加同名变量 `VITE_ASSET_BASE_URL`，重新运行部署工作流。
6. Vercel 部署：在项目环境变量中添加同名变量后重新部署。

域名根地址不包含 `/assets`。未配置时仍使用本地图片；首页背景、功能卡片、场景图片都使用此配置。环境变量在构建时写入产物，修改后必须重新构建。

上传包只包含图片和静态资源配置，不包含网站源码。图片更新后需重新生成上传包并上传；同名图片的浏览器缓存最多保留一天。当前配置仍保留 public 原图作为本地开发资源。

Cloudflare Pages 静态请求免费且不限次数，单文件最大 25 MiB。海外服务在中国大陆的实际速度需测试。

官方文档：
- https://developers.cloudflare.com/pages/get-started/direct-upload/
- https://developers.cloudflare.com/pages/platform/limits/
- https://developers.cloudflare.com/pages/functions/pricing/
