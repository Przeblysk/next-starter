# Next.js 启动模板

[English](./README.md) | [简体中文](./README.zh-CN.md)

一个现代化、功能丰富的 Next.js 启动模板，预配置了最佳实践和强大的工具，帮助你快速开始 Web 开发项目。

[![Next Starter](./public/og.png)](https://next-starter.przeblysk.com/)

## ✨ 特性

- 🚀 **Next.js 15** - 使用最新版本的 App Router
- 💎 **TypeScript** - 类型安全和更好的开发体验
- 🎨 **Tailwind CSS** - 实用优先的 CSS 框架
- 🔐 **Next-Auth v5** - 支持多种身份验证提供商
- 🌐 **i18n** - 使用 next-intl 的国际化支持
- 🗃️ **Drizzle ORM** - 现代 TypeScript ORM
- 🎯 **React Hook Form** - 使用 Zod 的表单验证
- 🎭 **Themes** - 使用 next-themes 的暗色/亮色模式
- 🧩 **Radix UI** - 无障碍 UI 组件
- 🎬 **Server Actions** - 类型安全的服务器函数
- 📏 **ESLint & Prettier** - 代码格式化和代码检查
- 🎁 **Shadcn/ui** - 精美且可定制的 UI 组件

## 🚀 快速部署

通过 Vercel 部署是最快的方式：

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/next-starter)

1. 点击上方的"使用 Vercel 部署"按钮
2. 连接你的 GitHub 账号
3. 选择仓库名称
4. 在 Vercel 仪表板中配置环境变量：
   ```env
   NEXT_PUBLIC_APP_URL=你的应用URL
   AUTH_SECRET=你的认证密钥
   AUTH_GITHUB_ID=你的GitHub认证客户端ID
   AUTH_GITHUB_SECRET=你的GitHub认证客户端密钥
   AUTH_GOOGLE_ID=你的Google认证客户端ID
   AUTH_GOOGLE_SECRET=你的Google认证客户端密钥
   AUTH_DRIZZLE_URL=你的PostgreSQL数据库URL
   ```
5. 开始部署！🎉

## 💻 本地开发

1. 克隆仓库：

   ```bash
   git clone https://github.com/yourusername/next-starter.git
   cd next-starter
   ```

2. 安装依赖：

   ```bash
   pnpm install
   ```

3. 复制环境变量文件：

   ```bash
   cp .env.example .env
   ```

4. 在 `.env` 中配置你的环境变量

5. 初始化数据库：

   ```bash
   pnpm db:push
   ```

6. 启动开发服务器：

   ```bash
   pnpm dev
   ```

7. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 📚 使用指南

### 身份认证

- 使用 NextAuth.js v5 的内置认证
- 支持多个认证提供商
- 受保护的 API 路由和页面

### 国际化

- 支持多语言（目前支持英文和中文）
- 通过添加新的消息文件轻松添加新语言
- 语言切换与选择持久化

### 数据库操作

- 使用 Drizzle ORM 的类型安全数据库操作
- 使用 Drizzle Kit 的数据库架构管理
- 使用 Drizzle Studio 查看数据库：`pnpm db:studio`

### 表单处理

- 使用 React Hook Form 和 Zod 的类型安全表单验证
- 预构建的表单组件，带有适当的验证
- 使用现有设置轻松创建新表单

## 📝 许可证

MIT 许可证 - 你可以在任何项目中自由使用此模板！

## 🤝 贡献

欢迎贡献！请随时提交 Pull Request。
