<!-- ------------------------------------------------------- -->
<!-- ✨ TECHSHOP - MODERN SHOPPING CART APPLICATION README ✨ -->
<!-- ------------------------------------------------------- -->



<h1 align="center">⚡ TechShop — Modern Shopping Cart Application</h1>

<p align="center">
  <em>A beautiful, responsive e-commerce shopping cart with smooth animations, elegant UI, and a robust backend.</em><br/>
  <strong>Built with React · TypeScript · Express · Tailwind CSS</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/tests-100%25-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/deployment-Vercel-black?style=for-the-badge&logo=vercel" />
</p>

---


## ✨ Core Features

| 🧩 Feature | 💡 Description |
|-------------|----------------|
| 🛍️ **Product Catalog** | Browse 8 premium tech products with stunning images |
| 💳 **Cart System** | Add, remove, and update quantities with instant feedback |
| 💾 **Cart Persistence** | Saved in LocalStorage between sessions |
| 📱 **Responsive Layout** | Works flawlessly on all screen sizes |
| 🎨 **Modern UI** | Tailwind + Framer Motion for elegant, fluid design |
| 🧠 **Type Safety** | 100% TypeScript implementation |
| 🧪 **Tested API** | Jest + Supertest for reliable backend testing |
| ⚡ **Vite-Powered** | Fast, lean builds and instant hot reload |

---

## 🧩 Tech Stack

**Frontend**
- ⚛️ React 18 + TypeScript
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎬 Framer Motion
- 🧭 React Router
- 💡 Context API (Cart State)
- 🔣 Lucide React Icons

**Backend**
- 🖥️ Node.js + Express
- 🔒 CORS
- 🧪 Jest + Supertest

---

## ⚙️ Getting Started

### 📋 Prerequisites
- Node.js v16+  
- npm or yarn

### 🔧 Installation & Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/techshop.git

# 2. Navigate into the project directory
cd techshop

# 3. Install dependencies
npm install
▶️ Run Locally
🖥️ Backend (API Server)
bash
Copy code
npm run server
Runs on http://localhost:5000

💻 Frontend (React App)
bash
Copy code
npm run dev
Opens at http://localhost:5173

🎉 Now open your browser and visit:
👉 http://localhost:5173

🧪 Running Tests
Run backend test suite using Jest & Supertest:

bash
Copy code
npm test
✅ Test Coverage Includes:
GET /api/products — Fetch all products

POST /api/checkout — Validate and process an order

Error handling for invalid requests

Test Files:

bash
Copy code
server/__tests__/products.test.js
🔌 API Endpoints
GET /api/products
Fetch all available products.

json
Copy code
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 79.99,
    "imageUrl": "https://...",
    "description": "Premium noise-cancelling headphones"
  }
]
POST /api/checkout
Process a checkout order.

Request Body:

json
Copy code
{
  "items": [
    { "id": 1, "quantity": 2 },
    { "id": 3, "quantity": 1 }
  ]
}
Response:

json
Copy code
{
  "success": true,
  "message": "Order placed successfully!",
  "orderId": "ORD-1234567890",
  "total": "189.97"
}
🗂️ Project Structure
bash
Copy code
project/
├── server/
│   ├── index.js               # Express backend
│   ├── data/
│   │   └── products.js        # Hardcoded product data
│   └── __tests__/             # Jest API tests
│       └── products.test.js
├── src/
│   ├── components/            # Reusable UI components
│   ├── contexts/              # Global Cart context
│   ├── pages/                 # Page components (Products, Cart)
│   ├── types/                 # TypeScript definitions
│   ├── App.tsx                # Main app file
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
└── tailwind.config.js         # Tailwind theme config
🎨 Design System
Category	Choice	Description
🎨 Colors	Sky Blue + Amber	Modern, clean tech aesthetic
✍️ Font	Inter	Professional and legible
📏 Spacing	8px grid	Consistent rhythm
🌫️ Shadows	Soft depth	Subtle realism
🌀 Animations	Framer Motion	Natural, meaningful motion

🧠 Architecture & Design Choices
🧩 Context API over Redux — lightweight state management

💾 LocalStorage Persistence — cart survives refresh

🧱 Modular File Structure — clean component separation

💬 Graceful Error Handling — user-friendly messages

🔐 RESTful API Separation — clear frontend-backend boundary

🚀 Roadmap / Future Enhancements
🔐 User Authentication (JWT)

💳 Payment Gateway (Stripe / PayPal)

🕵️ Product Filtering & Search

📦 Order History

🌟 Reviews & Wishlist

⚙️ Admin Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```


## 🌍 Browser Support
✅ Chrome
✅ Firefox
✅ Safari
✅ Edge

🤝 Contributing
Contributions, issues, and feature requests are welcome!


