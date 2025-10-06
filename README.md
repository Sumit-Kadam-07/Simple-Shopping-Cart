# TechShop - Modern Shopping Cart Application

A beautiful, fully-featured e-commerce shopping cart application with a modern UI, smooth animations, and a robust backend. Built with React, TypeScript, Express, and styled with Tailwind CSS.

## Features

- **Product Catalog**: Browse 8 premium tech products with high-quality images
- **Modern UI Design**: Professional design with smooth animations and micro-interactions
- **Shopping Cart**: Add items to cart with instant visual feedback
- **Quantity Management**: Adjust quantities with animated controls
- **LocalStorage Persistence**: Cart state persists across browser sessions
- **Checkout Flow**: Complete orders with backend validation and order ID generation
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Animations**: Framer Motion powered animations for enhanced user experience
- **Type Safety**: Full TypeScript implementation

## Tech Stack

### Backend
- **Node.js** with **Express** - RESTful API server
- **CORS** - Cross-origin resource sharing
- **Jest** with **Supertest** - API testing framework

### Frontend
- **React 18** with **TypeScript** - Component-based UI
- **Vite** - Lightning-fast development and build tool
- **React Router** - Client-side routing
- **Context API** - Global state management
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Modern icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies**
   ```bash
   npm install
   ```

### Running the Application

You need to run both the backend server and frontend development server:

#### 1. Start the Backend Server

```bash
npm run server
```

The backend API will start on **http://localhost:5000**

#### 2. Start the Frontend (in a new terminal)

```bash
npm run dev
```

The frontend will start on **http://localhost:5173**

#### 3. Open your browser

Navigate to **http://localhost:5173** to view the application.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Running Tests

Run the test suite with:

```bash
npm test
```

This will execute the Jest tests for the backend API endpoints:
- Product retrieval tests
- Checkout validation tests
- Error handling tests

### Test Coverage

Tests are located in `server/__tests__/products.test.js` and cover:
- `GET /api/products` - Returns product list
- `POST /api/checkout` - Processes orders with validation
- Error scenarios and edge cases

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
    "imageUrl": "https://images.pexels.com/photos/...",
    "description": "Premium noise-cancelling headphones"
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

**Error Response (400):**
```json
{
  "error": "Items array is required"
}
```

## Project Structure

```
project/
├── server/
│   ├── index.js                 # Express server
│   ├── data/
│   │   └── products.js          # Product data
│   └── __tests__/
│       └── products.test.js     # API tests
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Navigation header with cart badge
│   │   └── ProductCard.tsx      # Animated product card
│   ├── contexts/
│   │   └── CartContext.tsx      # Cart state management
│   ├── pages/
│   │   ├── ProductsPage.tsx     # Products listing page
│   │   └── CartPage.tsx         # Shopping cart page
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # App entry point
│   └── index.css                # Global styles
├── package.json
├── vite.config.ts
├── tailwind.config.js           # Tailwind configuration with custom theme
└── tsconfig.json
```

## Design Choices & Assumptions

### Design System
- **Color Palette**: Sky blue primary colors with amber accents (avoiding purple/indigo for a fresh, professional look)
- **Typography**: Inter font family with clear hierarchy (headings at 120% line-height, body at 150%)
- **Spacing**: Consistent 8px spacing system throughout
- **Shadows**: Custom soft shadows for depth without harshness
- **Animations**: Subtle, meaningful animations that enhance UX without distraction

### Architecture Decisions

1. **State Management**: Context API chosen for simplicity over Redux, as cart state is straightforward
2. **LocalStorage Persistence**: Cart data saved locally to survive page refreshes
3. **Component Structure**: Separated concerns with dedicated components, contexts, and pages
4. **Type Safety**: Full TypeScript coverage for compile-time safety
5. **API Design**: RESTful principles with clear separation between products and checkout
6. **Error Handling**: Graceful error states with user-friendly messages

### Assumptions

- Products are hardcoded in `server/data/products.js` (in production, this would be a database)
- No authentication required (could be added for user accounts)
- Checkout is simplified (no payment processing, just order logging)
- Product images from Pexels (free stock photos)
- Single currency (USD)
- Tax and shipping calculations not included
- Order data is logged to console (would be saved to database in production)

### Future Enhancements

- User authentication and accounts
- Product search and filtering
- Payment gateway integration (Stripe, PayPal)
- Order history and tracking
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard for product management
- Database integration (Supabase available for use)

## Browser Support

Modern browsers with ES6+ support:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes.

## Contributing

Feel free to submit issues and enhancement requests.
