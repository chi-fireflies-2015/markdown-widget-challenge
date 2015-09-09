// function italics (text){
//   if (text)
// }
var MarkdownText = function(string) {
  this.string = string;
};

MarkdownText.prototype.italics = function(){
  return this.string.replace(/\s(\*)(\w+)(\*)/g, " <i>$2</i>");
};

MarkdownText.prototype.bold = function(){
  return this.string.replace(/(\*\*)(\w+)(\*\*)/g, "<b>$2</b>");
};

// MarkdownText.prototype.newLine = function(){
//   $('textarea').on('keyup', function(event){
//     if event.keyup ==
//   return this.string.replace(/$/, "<br>");
// };

MarkdownText.prototype.changeText = function() {
  this.string = this.italics();
  this.string = this.bold();
  // this.string = this.newLine();
};


$(document).on('ready', function() {
  $('textarea').on("click", function(event){
    var userText = $('textarea').val();
    var markedText = new MarkdownText(userText);
    $('textarea').on('keyup', function(event){
      markedText.string = $('textarea').val();
      markedText.changeText();
      $('.output-box').empty();
      $('.output-box').append(markedText.string);
    });
  });
});



