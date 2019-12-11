'use strict';

function getDogImage(numInput) {
  if (numInput < 3) {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  } else if (numInput > 50) {
    return alert("Please choose numbers between 3-50");
  } else {
    fetch(`https://dog.ceo/api/breeds/image/random/${numInput}`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
  }
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace current image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display for results section
  $('.results').removeClass('hidden');
}

function inputForm() {
  $('#dog-num-form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  inputForm();
});

//input type="number" min="0" max="100" step="5">
//<input type="number" min="0" max="50" step="1" required>
//<input type="number" min="0" max="50" step="1"></input>

