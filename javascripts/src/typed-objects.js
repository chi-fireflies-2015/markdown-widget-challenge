var string = "Hey *YOU* !"

function italics (string){
  return string.replace(/(\*)(\S+)(\*)/g, "<i>$2<i>");
};

var boldString = "Hey **YOU!**"

function bold (string){
  return string.replace(/(\*\*)(\S+)(\*\*)/g, "<b>$2<b>");
};
