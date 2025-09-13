const axios = require('axios')
async function addToQueue(email, otp) {
  let data = '{\r\n    "email":"fakeuser595@gmail.com"\r\n}';

  try {

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://urlpro.vercel.app/sendEmail',
      headers: {
        'email': email,
        'otp': otp,
        'Content-Type': 'text/plain'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        return (response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error:', error);
  }

}
module.exports = addToQueue