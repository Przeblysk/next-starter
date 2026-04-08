# AGENTS.md

## 项目概述

Next.js 16 全栈启动模板，集成认证、数据库、国际化等功能。

## 技术栈

- **框架**: Next.js 16 (App Router, Turbopack, standalone 输出)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4 + shadcn/ui (new-york 风格)
- **数据库**: PostgreSQL + Drizzle ORM
- **认证**: NextAuth v5 (beta)
- **国际化**: next-intl (中英双语，翻译文件在 `messages/`)
- **表单**: react-hook-form + zod
- **主题**: next-themes
- **包管理**: pnpm

## 常用命令

```bash
pnpm dev          # 开发服务器 (Turbopack)
pnpm build        # 生产构建
pnpm lint         # Biome 代码检查
pnpm db:push      # 推送数据库 schema
pnpm db:studio    # Drizzle Studio
```

## 代码规范

- **格式化**: Biome (双引号，空格缩进) + Prettier (import 排序)
- **Lint**: Biome，启用 recommended 规则集
- **路径别名**: `@/` 映射到项目根目录
- shadcn/ui 组件放在 `components/ui/`

## 目录结构

```
app/            # Next.js App Router 页面和布局 (含 auth 路由组)
components/     # 组件 (ui/ 为 shadcn 组件, auth/ 为认证相关)
config/         # 站点配置
db/             # Drizzle schema 和数据库连接
hooks/          # 自定义 React hooks
i18n/           # 国际化配置
lib/            # 工具函数 (utils, auth, metadata)
messages/       # 翻译文件 (en.json, zh.json)
```
