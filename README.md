This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# My Shop — Next.js Screening Assignment

## Tech
- Next.js (App Router)
- JavaScript
- TailwindCSS + Bootstrap
- Redux Toolkit (for cart state management)
- FakeStore API proxied at `/api/products`

## ✨ Features
- Product listing with image, title, and price  
- Add to cart and view cart  
- Update quantity and remove items  
- Persistent cart via `localStorage`  
- Search products by name  
- Filter products by category  
- Next.js API route for products (`/api/products`)  
- Deployed on **Netlify**

## 🧠 Implementation Highlights
- Products are fetched via a **custom Next.js API route** (`/api/products`).
- The **Redux store** manages cart state, including add/remove and quantity updates.
- **LocalStorage** ensures cart data persists after page refresh.
- **Search** and **Filter** components provide real-time product filtering.
- **Tailwind CSS** ensures a clean and responsive layout.

## Run locally
1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

## Deployment

- Deployed on **Netlify** - `https://our-shopee.netlify.app/`
