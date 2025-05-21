const axios = require('axios');
require('dotenv').config();


async function getAnswerFromOpenRouter(question) {
  try {
    const response = await axios.post(
      process.env.API_URL,
      {
        model: "mistralai/mixtral-8x7b-instruct", // or any other model name available on OpenRouter
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: question,
          }
        ],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:3000', // required by OpenRouter for some plans
          'X-Title': 'MyApp' // required or recommended by OpenRouter
        }
      }
    );

    const result = response.data;
    const reply = result.choices?.[0]?.message?.content;

    return reply || "No response generated.";
  } catch (error) {
    console.error('OpenRouter API error:', error.response?.data || error.message);
    return "Error generating response.";
  }
}

module.exports = { getAnswerFromOpenRouter };
