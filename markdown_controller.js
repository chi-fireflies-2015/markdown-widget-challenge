$(document).ready(function() {
  var ENTER_KEYCODE = 13;

  var markdownView = new MarkdownView();
  var markdown = new Markdown();

  $("#source").on("keyup", function(event) {
    if (event.which === ENTER_KEYCODE) {
      markdownView.appendParagraph();
    }
    else {
      // delete is 8
      var markdownText = markdownView.lastParagraphText(this);
      var displayText = markdown.parseInput(markdownText)
      markdownView.appendText(displayText);
    }
  });
});
