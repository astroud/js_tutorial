let Phrase = require("astroud-palindrome");

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResults = document.querySelector("#palindromeResults");
  
  document.querySelector("textarea").value = "";
  document.querySelector("textarea").focus();

  if (phrase.content.length < 2) {
    palindromeResults.innerHTML = `${palindromeResults.innerHTML}
                                  <p>❌   "${phrase.content}" is too short and is not a palindrome.</p>`;
  }
  else if (phrase.palindrome()) {
  palindromeResults.innerHTML = `${palindromeResults.innerHTML}
                                  <p class="palindrome">✔︎   "${phrase.content}" is a palindrome!</p>`;
  } else {
    palindromeResults.innerHTML = `${palindromeResults.innerHTML}
                                   <p>❌   "${phrase.content}" is not a palindrome.</p>`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});