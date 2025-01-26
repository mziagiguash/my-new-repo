This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel


---

### **2. Подключите деплой на Vercel**

1. **Зайдите в [Vercel](https://vercel.com):**
   - Авторизуйтесь через GitHub.

2. **Создайте новый проект:**
   - Нажмите "Add New Project" и выберите ваш репозиторий из списка.

3. **Настройте проект:**
   - Убедитесь, что выбран фреймворк React или Next.js.
   - Укажите команду сборки (по умолчанию):
     ```bash
     npm run build
     ```
   - Укажите папку для деплоя (обычно `dist` или `build`, если это React).

4. **Разверните проект:**
   - Нажмите "Deploy". После завершения деплоя вы получите ссылку на сайт.

5. **Добавьте ссылку на Vercel в `README.md`.**

---

### **3. Запушьте обновления в репозиторий**

Добавьте файл `README.md` и остальные изменения в репозиторий:

```bash
git add README.md
git commit -m "Добавлен README и подключен деплой на Vercel"
git push


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
