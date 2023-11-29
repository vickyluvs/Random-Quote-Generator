// function to get quotes with axios

function getQuote(response) {
  let quoteDisplay = document.getElementById("quote_para");
  let authorDisplay = document.getElementById("author");

  let apiQuote = [];
  response.data.forEach((array) => {
    apiQuote.push(Object.values(array)[0]);
  });

  let authorQuote = [];
  response.data.forEach((array) => {
    authorQuote.push(Object.values(array)[1]);
  });

  quoteDisplay.innerHTML =
    apiQuote[Math.floor(Math.random() * apiQuote.length)];

  authorDisplay.innerHTML =
    authorQuote[Math.floor(Math.random() * authorQuote.length)];
}
let webUrl = `https://type.fit/api/quotes`;
let button = document.getElementById("btn-quote");

button.addEventListener("click", () => {
  axios.get(webUrl).then(getQuote);
});
