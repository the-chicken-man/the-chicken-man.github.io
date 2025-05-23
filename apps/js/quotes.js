const quotes = [
  "You know that one proxy called proxy",
  "EAT LOU'S CHEESE FROM LOU'S CHEESE COMPANY",
  "it used to show updates here, but know it is just dumb quotes",
  "'BRO FELL OFF' [Skull emoji]",
  "USE CHICKEN-OS",
  "There is a teacher behind you with a detention slip",
  " Look upwards.... GOOOOD BOOYYYYY"
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

document.getElementById("quote").textContent = randomQuote;
