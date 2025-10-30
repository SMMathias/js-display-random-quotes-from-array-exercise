"use strict";

const quotes = [
  "It does not matter how slowly you go so long as you do not stop.",
  "I have a dream.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The way to get started is to quit talking and begin doing.",
  "A journey of a thousand miles begins with a single step.",
];

function getRandomQuote() {
  if (quotes.length === 0) {
    return "No quotes available";
  }
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayRandomQuote() {
  const randomQuote = getRandomQuote();
  document.getElementById("quotes").textContent = randomQuote;
}

document
  .getElementById("displayQuoteBtn")
  .addEventListener("click", displayRandomQuote);
