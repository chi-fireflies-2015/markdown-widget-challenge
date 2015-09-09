function MarkdownView() {
}

MarkdownView.prototype.appendParagraph = function() {
  $("#preview").append("<p></p>");
}

MarkdownView.prototype.appendText = function(text) {
  $("#preview p").last().html(text);
}

MarkdownView.prototype.lastParagraphText = function(element) {
  return $(element).val().split(/\n/).pop();
}
