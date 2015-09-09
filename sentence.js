function Sentence(string) {
  var wordTexts = string.split(" ");
  this.words = wordTexts.map(function(text) {
    return new Word(text);
  });
}
