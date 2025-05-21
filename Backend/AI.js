const { getAnswerFromOpenRouter } = require('./API'); // adjust import as needed

async function processTextQuery(question) {
  if (question) {
    const aiAnswer = await getAnswerFromOpenRouter(question);
    return aiAnswer;
  } else {
    throw new Error('No question provided');
  }
}

module.exports = { processTextQuery };


