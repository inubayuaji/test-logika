function palindrome(text) {
  text = text.toLowerCase();
  var reverse = text.split("").reverse().join("");

  return text == reverse;
}

console.log(palindrome("Radar"));
console.log(palindrome("Malam"));
console.log(palindrome("Kasur ini rusak"));
console.log(palindrome("Ibu Ratna antar ubi"));
console.log(palindrome("Malas"));
console.log(palindrome("Makan nasi goreng"));
console.log(palindrome("Balonku ada lima"));
