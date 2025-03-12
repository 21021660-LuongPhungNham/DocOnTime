import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectMongo from './config/mongodb.js';


dotenv.config();

console.log("🔍 MONGODB_URI:", process.env.MONGODB_URI); // Kiểm tra giá trị

const app = express();
const port = process.env.PORT || 4000;

// .....ket noi mongodb
connectMongo();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('working');
});

app.listen(port, () => console.log(`Server working on port ${port}`));
