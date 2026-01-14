
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mapRoutes from './routes/mapRoutes.js';
import tripRoutes from './routes/tripRoutes.js';
import connectDB from './config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';


dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/api/maps', mapRoutes);
app.use('/api/trips', tripRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
