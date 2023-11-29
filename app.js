// this is our array of quotes
const array = [
  '"Genius is one percent inspiration and ninety-nine percent perspiration." Author: Thomas Edison',
  ' "You can observe a lot just by watching." author: Yogi Berra',
  '"A house divided against itself cannot stand." author: Abraham Lincoln"',
  ' "Difficulties increase the nearer we get to the goal." author: Johann Wolfgang von Goethe',
  '"Fate is in your hands and no one else." author: Byron Pulsifer',
  '"Be the chief but never the lord."  author: Lao Tzu',
  '"Nothing happens unless first we dream." author: Carl Sandburg',
  '"Well begun is half done."  author: Aristotle',
  ' "Life is a learning experience, only if you learn." author: Yogi Berra',
  '"Self-complacency is fatal to progress." author: Margaret Sangster',
];

// function to get quotes with axios

function getQuote() {
  let webUrl = `https://www.affirmations.dev/`;
  axios.get(webUrl).then(getQuote);
}

const quoteDisplay = document.getElementById("quote");

//random quote generating function
function randomQuote() {
  quoteDisplay.innerHTML = array[Math.floor(Math.random() * array.length)];
}
const button = document.getElementById("btn-quote");
button.addEventListener("click", randomQuote);
