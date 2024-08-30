// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// // Connect to MongoDB
// // mongoose.connect('mongodb://127.0.0.1:27017/productsDB', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // });

// mongoose.connect('mongodb://127.0.0.1:27017/productsdb', { // Use 'productsdb' instead of 'productsDB'
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });


// // Create a schema for products
// const productSchema = new mongoose.Schema({
//     title: String,
//     price: Number,
//     imageUrl: String,
// });

// // Create a model for products
// const Product = mongoose.model('Product', productSchema);

// // Middleware
// app.use(bodyParser.json());
// app.use(express.static('public'));

// // Routes
// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// app.post('/api/products', async (req, res) => {
//     const { title, price, imageUrl } = req.body;

//     const product = new Product({
//         title,
//         price,
//         imageUrl,
//     });

//     try {
//         await product.save();
//         res.status(201).json(product);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 3000;

// // Middleware to parse JSON requests
// app.use(express.json());

// // MongoDB connection URI
// const uri = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(uri);

// async function main() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');

//     const database = client.db('productsdb');
//     const collection = database.collection('products');

//     // Get all products
//     app.get('/products', async (req, res) => {
//       const products = await collection.find({}).toArray();
//       res.json(products);
//     });

//     // Add a new product
//     app.post('/products', async (req, res) => {
//       const newProduct = req.body;
//       const result = await collection.insertOne(newProduct);
//       res.json(result);
//     });

//     app.listen(port, () => {
//       console.log(`Server running at http://localhost:${port}`);
//     });
//   } catch (e) {
//     console.error(e);
//   }
// }

// main().catch(console.error);

// const express = require('express');
// const path = require('path');
// const { MongoClient } = require('mongodb');

// const app = express();
// const PORT = 3000;

// // MongoDB connection URL and database name
// const mongoUrl = 'mongodb://localhost:27017'; // Update this with your MongoDB connection string if different
// const dbName = 'productsdb'; // Your database name

// // Serve static files from the public folder
// app.use(express.static(path.join(__dirname, 'public')));

// // Connect to MongoDB and fetch products
// async function getProducts() {
//   const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });
  
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');

//     const db = client.db(dbName);
//     const productsCollection = db.collection('products');
//     const products = await productsCollection.find({}).toArray();

//     return products;
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     return [];
//   } finally {
//     await client.close();
//   }
// }

// // API endpoint to get products
// app.get('/api/products', async (req, res) => {
//   const products = await getProducts();
//   res.json(products);
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// const express = require('express');
// const path = require('path');
// const { MongoClient } = require('mongodb');

// const app = express();
// const PORT = 3000;

// // MongoDB connection URL and database name
// const mongoUrl = 'mongodb://localhost:27017'; // MongoDB connection string
// const dbName = 'productsdb'; // Your MongoDB database name

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Function to connect to MongoDB and retrieve products
// async function getProducts() {
//   const client = new MongoClient(mongoUrl, { useUnifiedTopology: true });
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB');

//     const db = client.db(dbName);
//     const productsCollection = db.collection('products');
//     const products = await productsCollection.find({}).toArray();

//     return products;
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     return [];
//   } finally {
//     await client.close();
//   }
// }

// // API endpoint to fetch products
// app.get('/api/products', async (req, res) => {
//   const products = await getProducts();
//   res.json(products);
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });


// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3000; // or your chosen port

// // Middleware to parse JSON
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/productsdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define the product schema
// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   imageUrl: String,
// });

// // Create the product model
// const Product = mongoose.model('Product', productSchema);

// // Define the route to get products
// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching products' });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


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
