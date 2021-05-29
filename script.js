alert(vogais("Beatriz"));

function vogais(str) {
  var count = 0;

  for (var i = 0; i <= str.length; ++i) {
    if (isVowel(str.substr(i, 1))) {
      count++;
    }
  }
  return count;
};

function isVowel(ch) {
  var pattern = /[aeiouAEIOU]/
  return pattern.test(ch);
};