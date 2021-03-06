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

const header = document.getElementById("heading");
heading.style.fontFamily = "Helvetica Neue";
heading.style.fontSize = "24px";

const button = document.getElementById("btn-quote");
button.style.backgroundColor = "alice-blue";
button.style.borderRadius = "5px";
button.style.border = "none";
button.style.cursor = "pointer";
button.style.fontSize = "12px";
(button.style.fontFamily = "Courier New"), "Courier", "monospace";

const quoteDisplay = document.getElementById("quote");
quoteDisplay.style.color = "white";
quoteDisplay.style.fontSize = "16px";
quoteDisplay.style.fontStyle = "normal";
(quoteDisplay.style.fontFamily = "Courier New"), "Courier", "monospace";

//random quote generating function
function randomQuote() {
  quoteDisplay.innerHTML = array[Math.floor(Math.random() * array.length)];
}

button.addEventListener("click", randomQuote);
