$(document).ready(function () {

var MarkDownWidget = function(sourceVal, previewId){
  this.source_val = sourceVal;
  this.preview = previewId;
  var previewtext = "";

  function styleItalic(source){
    function makeItalic(match){
      return "<i>"+match.replace(/\*/g,"")+"</i>";
    };
    var newstring="";
    newstring = source.replace(/\*{1}[^\*]*\*{1}/g, makeItalic);
    return newstring;
  };

  function styleBold(source){
    function makeBold(match){
      return "<b>"+match.replace(/\*/g,"")+"</b>";
    };
    var newstring="";
    newstring = source.replace(/\*{2}[^\*]*\*{2}/g, makeBold);
    return newstring;
  };

  function styleUnderscoreItalic(source){
    function makeItalic(match){
      return "<i>"+match.replace(/\_/g,"")+"</i>";
    };
    var newstring="";
    newstring = source.replace(/\_{1}[^\_]*\_{1}/g, makeItalic);
    return newstring;
  };

  function styleBoldItalic(source){
    function makeBold(match){
      return "<b><i>"+match.replace(/\*/g,"")+"</i></b>";
    };
    var newstring="";
    newstring = source.replace(/\*{3}[^\*]*\*{3}/g, makeBold);
    return newstring;
  };


  return styleUnderscoreItalic(styleItalic(styleBold(styleBoldItalic(source_val))));
};

$('#source-id').keyup(function(){
  // console.log($("#source-id").val());
  newText = ((MarkDownWidget($("#source-id").val(),$("#preview-id"))));
  console.log(newText);
  $("#preview-div").empty();
  $("#preview-div").append(newText);

});

});

  // this *is* _italic_ and **bold** and ***bolditalic***
  // \*{1}[^\*]*\*{1}  regex for italic *
  // \*{2}[^\*]*\*{2}  regex for bold
  // \*{3}[^\*]*\*{3}  regex for bold & italic
  // \_{1}[^\*]*\_{1}  regex for italic
