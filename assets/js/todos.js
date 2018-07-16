// Check off specific item by clicking
let $ul = $("ul");

$ul.on("click", "li", function () {
   $(this).toggleClass("completed");
});

//Click on X to delete to-do
$ul.on("click", "span" ,function (event) {
   //Remove the corresponding li
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
   event.stopPropagation();
});

//Create new to-do item
let $input = $("input[type='text']");
$input.on("keypress", function (event) {
   // enter key
   if (event.which === 13) {
      let newTodo = $(this).val();
      if (newTodo.length > 0){
         //create a new li to ul
          $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> "+ newTodo +"</li>");
          //Clear the input box
          $(this).val("");
      }
   }
});

$(".fa-plus").on("click",function () {
   $input.fadeToggle(400);
});