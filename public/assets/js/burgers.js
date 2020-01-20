$(function(){

$(".create-form").on("submit", function (event){
event.preventDefault();
  let newBurger={
    name: $("#burger-box").val().trim(),
    devoured: false
  };

// Send the POST request.
$.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );

})//  end of form submit

$(".devour-button").on("click",function(event){
//just need to get the id and change it's devoured state.
 let id= $(this).data("id");

// Send the PUT request.
$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: 1
  }).then(
    function() {
      console.log("changed devoured to 1");
      // Reload the page to get the updated list
      location.reload();
    }
  );


});


});