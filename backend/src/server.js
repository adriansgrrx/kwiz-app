import express from 'express';
import { config } from 'dotenv';
// import routes
import quizRoutes from './routes/quizRoutes.js'

config();

const app = express();

// API routes
app.use("/quiz", quizRoutes);

const PORT = 5000; 

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})
