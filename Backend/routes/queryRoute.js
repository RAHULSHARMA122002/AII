const express = require('express');
const router = express.Router();
const { processTextQuery } = require('../AI');

router.post('/ask', async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    const answer = await processTextQuery(question);
    res.json({ answer });
  } catch (err) {
    console.error('Error processing query:', err);
    res.status(500).json({ error: 'Failed to process query' });
  }
});

module.exports = router;
