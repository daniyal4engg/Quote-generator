let a = [
  "The secret to life is to love who you are.",
  "Look for opportunities in every change in your life.",
  "Persist while others are quitting.",
  "stay humble.",
  "stay consistant.",
  "always go for walk.",
  "do whatever makes u happy. ",
  "stay happy.",
];
function displayQuote() {
  let index = Math.floor(Math.random() * a.length);

  //display the quote of that index
  let div = document.querySelector("#quote");
  let outputQuote = `<div class="card" >
    <p>${a[index]}</p>
    </div>
    `;
  div.innerHTML = outputQuote;
}
let btn = document.querySelector(".btn");
btn.addEventListener("click", displayQuote);
