$(document).ready(function(){
  var model = new MarkdownModel("", "");
  var controller = new WidgetController("textarea", model);
  controller.keyWasPressed();
  // view.keyWasPressed();
  // console.log(key)
  controller.italics();
});


// this is our model
function MarkdownModel(source, preview) {
  this.source = source;
  this.preview = preview;
}

MarkdownModel.prototype.previewer = function(){
  $("#previewer").text(this.source);
}

function WidgetController(textBody, model){
  this.textBody = textBody;
  this.model  = model;
}

WidgetController.prototype.keyWasPressed = function(){
  $(this.textBody).on("keyup", function(event) {
    this.model.source = $(this.textBody).val();
    // return this.model.source;
    this.model.previewer();
    this.italics();
  }.bind(this));

}

WidgetController.prototype.italics = function(){
  // if (key === 42) {
    this.model.source = this.model.source.replace(/\*([^*]*)\*/, "<em>$1</em>");
    // console.log(sub);
  // }
}
