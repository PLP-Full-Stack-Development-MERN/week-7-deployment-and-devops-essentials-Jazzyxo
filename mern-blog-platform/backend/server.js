const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoutes = require('./routes/postRoutes');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/posts', postRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
