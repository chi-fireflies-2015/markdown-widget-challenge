$(document).ready(function () {

var MarkDownWidget = function(sourceVal, previewId){
  this.source_val = sourceVal;
  this.preview = previewId;
  var previewtext = "";

  //previewtext = sourceVal.replace(/\*{1}[^\*]*\*{1}/,"")
  function styleItalic(source){
    console.log("styleItalic source: "+source);
    function makeItalic(match){
      return "<i>"+match+"</i>";//.italics();
    };
    //regex remove *s here
    var newstring="";
    newstring = source.replace(/\*{1}[^\*]*\*{1}/g, makeItalic);
    console.log("newstring: "+newstring);
    return newstring;
  };
  return styleItalic(source_val);
};

$('#source-id').keyup(function(){
  // console.log($("#source-id").val());
  console.log((MarkDownWidget($("#source-id").val(),$("#preview-id"))));

});

});


  // \*{1}[^\*]*\*{1}  regex for italic *
  // \*{2}[^\*]*\*{2}  regex for bold
  // \*{3}[^\*]*\*{3}  regex for bold & italic
  // \_{1}[^\*]*\_{1}  regex for italic
