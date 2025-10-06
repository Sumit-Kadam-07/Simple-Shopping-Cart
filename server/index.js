import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { products } from './data/products.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// GET /api/products - Return all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// POST /api/checkout - Process checkout
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

// ✅ Always start listening 
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

export default app;
