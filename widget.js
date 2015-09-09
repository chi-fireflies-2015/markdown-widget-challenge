// On document ready create a MarkDown widget with an empty body
//When keys are pressed (keyUp), input contained in the "#text" id
// should be assigned to the body of the MarkdownWidget.
//
// Still inside the keyup function, every time a key is pressed, the
// html of the ("#output") should be populated with the MarkdownWidget.body.

MarkdownWidget = function(body){
  this.body = body;
}

MarkdownWidget.prototype.fillOutput = function(input){
  this.body = input
}

MarkdownWidget.prototype.checkStyle = function(input){
  if (input.match(/^[_].*[_]$/)){
    $("#output").addClass("italic")
    //and remove _ in front and back
  } else if (input.match(/^[*].*[*]$/)) {
    $("#output").addClass("italic")
  } else if (input.match(/^[**].*[**]$/)) {
    $("#output").addClass("bold")
  } else {
    $("#output").removeClass();
  }
}

function NewMarkdownWidgetView(element, model){
  this.element = element;
  this.model = model;
  element.on("keyup", this.onBodyChange.bind(this));
}

NewMarkdownWidgetView.prototype.onBodyChange = function(){
  console.log(this)
    var input = $(this.element).val();
    this.model.checkStyle(input)
    this.model.fillOutput(input)
    $("#output").html(this.model.body)
  }


$(document).on("ready", function(){
  var widget = new MarkdownWidget("")
  var view = new NewMarkdownWidgetView($("#text"), widget)

  })






