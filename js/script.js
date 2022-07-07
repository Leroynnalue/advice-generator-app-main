// API URL
const url = "https://api.quotable.io/random";

let quote_text = document.querySelector('[quote_text]');
let quote_generator = document.querySelector('[shuffle]');
let currentNo  = document.getElementById('advice_no');
let counter = 0;

let generate_quote = () => {
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote_text.innerText = item.content;
    });

    counter++;
    currentNo.textContent = counter;
};

window.addEventListener("load", generate_quote);
setInterval(generate_quote,6000);
quote_generator.addEventListener("click", generate_quote);