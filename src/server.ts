
import express from 'express';
import cors from 'cors';
import tasks from "./routes/tasks";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Ping url for health check
app.get('/ping', (req, res) => {
  res.send('ok');
});

// Add routes
app.use(tasks);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
