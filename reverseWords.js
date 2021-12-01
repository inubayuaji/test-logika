function capitalize(str) {
  var firstLetter = str.slice(0, 1);
  return firstLetter.toUpperCase() + str.substring(1);
}

function isCapitalize(str) {
  return str.charAt(0) == str.charAt(0).toUpperCase();
}

function reverseWords(text) {
  text = text.split(" ");

  text = text.map((word) => {
    reverse = word.split("").reverse().join("").toLowerCase();

    if (isCapitalize(word)) {
      return capitalize(reverse);
    } else {
      return reverse;
    }
  });

  return text.join(" ");
}

console.log(reverseWords("I am A Great human"));
