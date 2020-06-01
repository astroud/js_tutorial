#!/usr/local/bin/node

function hr() {
  console.log(`\n${'_'.repeat(50)}\n`);
}

let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

hr();

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});