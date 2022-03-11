import express from 'express';
import dotenv from 'dotenv'
import connectDB from './db/connect.js'
import errorHandler from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';
import authRoute from './routes/authRoute.js';
import jobRoute from './routes/jobRoute.js'

dotenv.config()

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
})

app.use('/api/v1/auth', authRoute);
app.use('/api/v1/jobs', jobRoute)

app.use(express.json())
app.use(notFoundMiddleware);
app.use(errorHandler);

start();

async function start() {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.log('Fail to connect to DB', error);
  }
}
