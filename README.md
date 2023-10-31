# Blog-Web-App-With-Malicious-URL-Detection

Getting Started
First, run the development server:

Set up prisma and make sure you have your mongoDB set up to configure prisma follow these commands

Forst You Have To Create .env file and Add the Database link , Google and GitHub authontication ID & Seacret to the env file

npm install @prisma/client @auth/prisma-adapter
npm install prisma --save-dev
npx prisma init --datasource-provider mongodb
npx prisma generate
Follow these commands to set up prisma and finaly you are good to go

npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!
