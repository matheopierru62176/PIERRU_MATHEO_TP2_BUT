const axios = require('axios');

const apiKey = 'ef2781da';

const getMovieData = async (title) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

getMovieData('Inception').then(data => console.log(data));