module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}



// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function processor(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Makes the phrase LOUDER.
  this.louder = function louder() {
    return this.processedContent.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
  // Returns translation processed for palindrome testing.
  // this.processedContent = function processedContent() {
  //   return this.translation.toLowerCase();
  // }
}

TranslatedPhrase.prototype = new Phrase();






// 7.3.1 Exercises
// Add a blank method to the String object prototype that returns true if the string is empty or consists solely of whitespace (spaces, tabs, or newlines). Hint: Use a regular expression (Section 4.3.2). You will need the regex syntax for the start and end of a string (Figure 7.6).

// Adds `blank` to all strings.
String.prototype.blank = function() {
  if (this.search(/\S+/g) === -1) {
    return true;
  }
  else {
    return false;
  }
}


// Using whichever method you prefer (direct indexing or slicing), add a last method to the Array object prototype that returns the last element of an array. Hint: Refer to Section 3.3.

Array.prototype.last = function() {
  return this[this.length - 1];
}

