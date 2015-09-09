$(document).ready(function(){
  $("form").on("submit", function(event){
    event.preventDefault();

    var input = new Sentence($(".input").val());

    var output = new View(input)
    $(".render p").append(output);

    // var array_of_words = new Sentence(input);

    // console.log(array_of_words);
    // console.log(array_of_words.words[1].textWeight);
    // console.log(array_of_words.words[1].textStyle);
    // $(".render p").append(final_string);

    // ***********Working code below, but not an MVC model**************
    // words.forEach(function (word) {
    //   if (word.match(/\b\_\w+\_\b/)) {
    //     final_string = final_string.concat("<span id='italic'>" + word.slice(1, -1) + "</span> ");
    //   } else if (word.match(/\*{2}\w+\*{2}/)) {
    //     final_string = final_string.concat("<span id='bold'>" + word.slice(2, -2) + "</span> ");
    //   } else if (word.match(/\*\w+\*/)) {
    //     final_string = final_string.concat("<span id='italic'>" + word.slice(1, -1) + "</span> ");
    //   } else {
    //     final_string = final_string.concat(word + " ");
    //   }
    // });
  });
});
