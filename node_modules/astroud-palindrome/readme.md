# Phrase object (with palindrome detector)

This is a sample NPM module created in Michael Hartl's [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial).

The module can be used as follows:

```
$ npm install --global astroud-palindrome
$ vim test.js
let Phrase = require("astroud-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```