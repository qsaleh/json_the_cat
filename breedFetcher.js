const request = require('request');
//const fs = require('fs');
const inputURL = 'https://api.thecatapi.com/v1/breeds/search?';
const inputBreed = process.argv[2];

request(`${inputURL}q=${inputBreed}`, (error, result, body) => {
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('Breed undefined.');
    return;
  } else {
    console.log(data[0].description);
  }
});