import express from 'express';
import product from './models/productModel.js'; 
import cors from 'cors';
import productRoutes from './routes/productRoute.js';
import cartRoutes from './routes/cartRoutes.js';
 // ⬅️ Add this line

const app = express();
const PORT = 3002;
app.use(cors());
import mongoose from 'mongoose';

const mongoURI = "mongodb://localhost:27017/e-com";
app.use(express.json());


app.post('/api/products',async (req,res) => {
    try{
        const NewProduct =await product.create(req.body);
        res.status(201).json({message:'Product created',NewProduct});
    }catch (err){
        res.status(400).json({error: err.message});

    }
})
app.get('/api/products', async (req, res) => {
  try {
    const products = await product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});


//get searcheed product 
app.use('/api', productRoutes);

// cart route
app.use('/api', cartRoutes);   

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello from REST API!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// app.use('/*', (req, res) => {
//     res.status(404).json({ message: 'Route not found' });
//   });