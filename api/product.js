import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    imageUrl: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg',
    description: 'Premium noise-cancelling headphones with superior sound quality'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    imageUrl: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    description: 'Feature-rich smartwatch with fitness tracking and notifications'
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 49.99,
    imageUrl: 'https://images.pexels.com/photos/7974/pexels-photo.jpg',
    description: 'Ergonomic aluminum laptop stand for better posture'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    price: 129.99,
    imageUrl: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
    description: 'RGB mechanical keyboard with tactile switches'
  },
  {
    id: 5,
    name: 'Wireless Mouse',
    price: 39.99,
    imageUrl: 'https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg',
    description: 'Ergonomic wireless mouse with precision tracking'
  },
  {
    id: 6,
    name: 'USB-C Hub',
    price: 59.99,
    imageUrl: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
    description: 'Multi-port USB-C hub with HDMI and card reader'
  },
  {
    id: 7,
    name: 'Webcam',
    price: 89.99,
    imageUrl: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg',
    description: '1080p HD webcam with auto-focus and low-light correction'
  },
  {
    id: 8,
    name: 'Phone Stand',
    price: 24.99,
    imageUrl: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    description: 'Adjustable phone stand for desk or bedside table'
  }
];

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/checkout', (req, res) => {
  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ error: 'Invalid cart items' });
  }

  console.log('=== NEW ORDER ===');
  console.log('Order Details:');

  let total = 0;
  items.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    if (product) {
      const itemTotal = product.price * item.quantity;
      total += itemTotal;
      console.log(`- ${product.name} x ${item.quantity} = $${itemTotal.toFixed(2)}`);
    }
  });

  console.log(`Total: $${total.toFixed(2)}`);
  console.log('=================\n');

  res.json({
    success: true,
    message: 'Order placed successfully!',
    orderId: `ORD-${Date.now()}`,
    total: total.toFixed(2),
  });
});

export default app;
