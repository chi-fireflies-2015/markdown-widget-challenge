function Word(text){
  this.text = text;
  this.textStyle = false;
  this.textWeight = false;
  this.checkIfBold();
  this.checkIfItalic();
}

Word.prototype.checkIfItalic = function () {
  if (this.text.match(/\b\_\w+\_\b/)|| this.text.match(/\*\w+\*/)) {
    this.textStyle = true;
    this.text = this.text.slice(1, -1);
  }
}
Word.prototype.checkIfBold = function () {
  if (this.text.match(/\*{2}\w+\*{2}/)) {
    this.textWeight = true;
    this.text = this.text.slice(2, -2);
  }
}
