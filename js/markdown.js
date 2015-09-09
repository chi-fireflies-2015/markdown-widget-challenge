$(document).ready(function () {

var MarkDownWidget = function(sourceVal, previewId){
  this.source_val = sourceVal;
  this.preview = previewId;
  var previewtext = "";

  function styleItalic(source){
    function makeItalic(match){
      return "<i>"+match+"</i>";
    };
    var newstring="";
    newstring = source.replace(/\*{1}[^\*]*\*{1}/g, makeItalic);
    return newstring;
  };

  function styleBold(source){
    function makeBold(match){
      return "<b>"+match+"</b>";
    };
    var newstring="";
    newstring = source.replace(/\*{2}[^\*]*\*{2}/g, makeBold);
    return newstring;
  };

  function styleUnderscoreItalic(source){
    function makeItalic(match){
      return "<i>"+match+"</i>";
    };
    var newstring="";
    newstring = source.replace(/\_{1}[^\_]*\_{1}/g, makeItalic);
    return newstring;
  };

  function styleBoldItalic(source){
    function makeBold(match){
      return "<b>"+match+"</b>";
    };
    var newstring="";
    newstring = source.replace(/\*{3}[^\*]*\*{3}/g, makeBold);
    return newstring;
  };

  function removeStars(source){
    return soure.replace(/\*/g,"");
  };

  return styleUnderscoreItalic(styleBold(styleItalic(styleBoldItalic(source_val))));
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
