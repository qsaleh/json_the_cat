const request = require('request');
const inputURL = 'https://api.thecatapi.com/v1/breeds/search?';

const fetchBreedDescription = function(breedName, callback) {
  request(`${inputURL}q=${breedName}`, (error, result, body) => {
    const data = JSON.parse(body);
    if (error !== null) {
      callback(error, null);
    } else if (data.length === 0) {
      console.log('Error, undefined breed.');
    } else {
      callback(null, data[0].description);
    }
  });
};



module.exports = { fetchBreedDescription };