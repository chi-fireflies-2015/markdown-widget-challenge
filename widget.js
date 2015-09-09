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
    return "<em>".concat(input.slice(1,-1)).concat("</em>");
  } else if (input.match(/^[*][a-zA-Z]*[*]$/)) {
    return "<em>".concat(input.slice(1,-1)).concat("</em>");
  } else if (input.match(/^[**].*[**]$/)) {
    var input2 = input.slice(1,-1)
    return "<b>".concat(input2.slice(1,-1)).concat("</b>");

  } else {
    $("#output").removeClass();
    return input
  }
}


function NewMarkdownWidgetView(element, model){
  this.element = element;
  this.model = model;
  //should do this for distinct words
  element.on("keyup", this.onBodyChange.bind(this));
  // element.checkIfWord//if keycode == space
}

NewMarkdownWidgetView.prototype.onBodyChange = function(){
  console.log(this)
    var input = []
    var inputArray = $(this.element).val().split(" ");
    inputArray.forEach(function(word){
      input.push(this.model.checkStyle(word));
    }.bind(this));
    var output = input.join(" ")
    this.model.fillOutput(output)
    $("#output").html(this.model.body)
  }


$(document).on("ready", function(){
  var widget = new MarkdownWidget("")
  var view = new NewMarkdownWidgetView($("#text"), widget)

  })






