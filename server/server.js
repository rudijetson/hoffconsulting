require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configure OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the AI Backend Server');
});

// API endpoint
app.post('/api/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
    
    const enhancedPrompt = `As a business AI assistant, please provide a detailed and professional response to the following request: ${prompt}. Include specific strategies or actionable steps where appropriate.`;

    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a knowledgeable business consultant with expertise in various industries and business processes. Your goal is to provide clear, actionable, and insightful advice to help businesses improve their operations and achieve their goals." },
        { role: "user", content: enhancedPrompt }
      ],
    });

    res.json({ result: completion.data.choices[0].message.content });
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});