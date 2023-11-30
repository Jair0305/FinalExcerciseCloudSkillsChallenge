
const axios = require('axios');

async function generateImage() {
  try {
    const response = await axios.post('https://api.openai.com/v1/images', {
      // Add your request payload here
    });

    // Handle the response here
    console.log(response.data);
  } catch (error) {
    // Handle the error here
    console.error(error);
  }
}

module.exports = generateImage;
