$(document).ready(function(){
  $("#submit_button").on("click", function(event){
    event.preventDefault();

      var input = $(".input").val();
      var edit_input = input.split(" ");
      var final_string = "";

      edit_input.forEach(function(word) {
        if (word.match(/\b\_\w+\_\b/)) {
          final_string = final_string.concat("<span id='italic'>" + word.slice(1, -1) + "</span> ");
        } else if (word.match(/\*{2}\w+\*{2}/)) {
          final_string = final_string.concat("<span id='bold'>" + word.slice(2, -2) + "</span> ");
        } else if (word.match(/\*\w+\*/)) {
          final_string = final_string.concat("<span id='italic'>" + word.slice(1, -1) + "</span> ");
        } else {
          final_string = final_string.concat(word + " ");
        }
      });
    $(".render p").append(final_string);
  });
});
