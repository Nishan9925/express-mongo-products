const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3018;

// Middleware
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/productsdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Product model
const Product = mongoose.model('Product', new mongoose.Schema({
  title: String,
  price: Number,
  imageUrl: String
}));

// Route to get products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
