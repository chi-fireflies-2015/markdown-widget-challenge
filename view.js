function View(input){
  this.final_string = "";
  this.input = input;
  this.input.words.forEach(function(word){
    if (word.textStyle == true) {
      return this.final_string.concat("<span id='italic'>" + word.text + "</span> ");
    } else if (word.textWeight == true){
      return this.final_string.concat("<span id='bold'>" + word.text + "</span> ");
    } else {
      return this.final_string.concat(word.text + " ")
    }
  })
  return this.final_string;
}
