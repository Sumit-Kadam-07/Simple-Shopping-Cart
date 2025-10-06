# Shopping Cart Application

A full-featured e-commerce shopping cart built with Express backend and React (Vite) frontend.

## Features

- **Product Catalog**: Browse 8 premium tech products with images and descriptions
- **Shopping Cart**: Add items to cart with real-time updates
- **Quantity Management**: Adjust quantities directly in the cart
- **LocalStorage Persistence**: Cart items persist across page refreshes
- **Checkout Flow**: Complete orders with backend validation
- **Responsive Design**: Beautiful UI styled with Tailwind CSS
- **React Router**: Seamless navigation between Products and Cart pages
- **API Tests**: Jest tests for backend endpoints

## Tech Stack

### Backend
- Node.js with Express
- CORS and body-parser middleware
- RESTful API endpoints
- Jest for testing

### Frontend
- React 18 with TypeScript
- Vite for fast development
- React Router for navigation
- Context API for state management
- Tailwind CSS for styling
- Lucide React for icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Backend Server

```bash
npm run server
```

The server will start on http://localhost:5000

### Run Frontend Dev Server

```bash
npm run dev
```

The frontend will start on http://localhost:5173

### Run Tests

```bash
npm test
```

## API Endpoints

### GET /api/products
Returns an array of all available products.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 79.99,
    "imageUrl": "...",
    "description": "..."
  }
]
```

### POST /api/checkout
Processes a checkout order with cart items.

**Request Body:**
```json
{
  "items": [
    { "id": 1, "quantity": 2 },
    { "id": 3, "quantity": 1 }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Order placed successfully!",
  "orderId": "ORD-1234567890",
  "total": "189.97"
}
```

## Project Structure

```
project/
├── server/
│   ├── index.js              # Express server
│   ├── data/
│   │   └── products.js       # Product data
│   └── __tests__/
│       └── products.test.js  # API tests
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   └── ProductCard.tsx   # Product display card
│   ├── contexts/
│   │   └── CartContext.tsx   # Cart state management
│   ├── pages/
│   │   ├── ProductsPage.tsx  # Products listing page
│   │   └── CartPage.tsx      # Shopping cart page
│   ├── types/
│   │   └── index.ts          # TypeScript types
│   └── App.tsx               # Main app component
└── package.json
```

## Usage

1. **Browse Products**: View all available products on the home page
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click the cart icon in the header to see your items
4. **Adjust Quantities**: Use the +/- buttons to change quantities
5. **Remove Items**: Click the trash icon to remove items
6. **Checkout**: Click "Checkout" to complete your order
7. **Confirmation**: Receive an order ID and total amount

## Features Implemented

✅ Express server on port 5000
✅ /api/products endpoint with hardcoded product data
✅ /api/checkout endpoint with order logging
✅ CORS and body-parser middleware
✅ Jest test for /api/products
✅ React frontend fetching from API
✅ Product grid display
✅ Add to Cart functionality
✅ Client-side cart state management
✅ Cart page with items, quantities, and total
✅ Checkout button with success alert
✅ LocalStorage persistence
✅ Quantity adjustment in cart
✅ React Router navigation
✅ Tailwind CSS styling
