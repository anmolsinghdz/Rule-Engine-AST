require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const { createRule, evaluateRule } = require('./rules');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoints
app.post('/api/create_rule', (req, res) => {
  const ruleString = req.body.rule;
  try {
    const ast = createRule(ruleString);
    res.status(200).json({ ast });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/evaluate_rule', (req, res) => {
  const { ast, user_data } = req.body;
  try {
    const result = evaluateRule(ast, user_data);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
