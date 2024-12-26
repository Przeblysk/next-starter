# Next.js Starter Template

[English](./README.md) | [简体中文](./README.zh-CN.md)

A modern, feature-rich Next.js starter template to kickstart your web development projects with best practices and powerful tools pre-configured.

[![Next Starter](./public/og.png)](https://next-starter.przeblysk.com/)

## ✨ Features

- 🚀 **Next.js 15** - Latest version with App Router
- 💎 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🔐 **Next-Auth v5** - Authentication with various providers
- 🌐 **i18n** - Internationalization support with next-intl
- 🗃️ **Drizzle ORM** - Modern TypeScript ORM
- 🎯 **React Hook Form** - Form validation with Zod
- 🎭 **Themes** - Dark/Light mode with next-themes
- 🧩 **Radix UI** - Accessible UI components
- 🎬 **Server Actions** - Type-safe server functions
- 📏 **ESLint & Prettier** - Code formatting and linting
- 🎁 **Shadcn/ui** - Beautiful and customizable UI components

## 🚀 Quick Deploy

The fastest way to deploy this template is through Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/next-starter)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Select a repository name
4. Configure your environment variables in Vercel dashboard:
   ```env
   NEXT_PUBLIC_APP_URL=your_app_url
   AUTH_SECRET=your_auth_secret
   AUTH_GITHUB_ID=your_github_auth_client_id
   AUTH_GITHUB_SECRET=your_github_auth_client_secret
   AUTH_GOOGLE_ID=your_google_auth_client_id
   AUTH_GOOGLE_SECRET=your_google_auth_client_secret
   AUTH_DRIZZLE_URL=your_postgresql_url
   ```
5. Deploy! 🎉

## 💻 Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/next-starter.git
   cd next-starter
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Copy the example env file:

   ```bash
   cp .env.example .env
   ```

4. Configure your environment variables in `.env`

5. Initialize the database:

   ```bash
   pnpm db:push
   ```

6. Start the development server:

   ```bash
   pnpm dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) with your browser

## 📚 Usage

### Authentication

- Built-in authentication using NextAuth.js v5
- Support for multiple authentication providers
- Protected API routes and pages

### Internationalization

- Support for multiple languages (currently English and Chinese)
- Easy to add new languages by adding new message files
- Language switching with persistent selection

### Database Operations

- Type-safe database operations with Drizzle ORM
- Database schema management with Drizzle Kit
- View your database with Drizzle Studio: `pnpm db:studio`

### Form Handling

- Type-safe form validation with React Hook Form and Zod
- Pre-built form components with proper validation
- Easy to create new forms with the existing setup

## 📝 License

MIT License - feel free to use this template for any project!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
