$(document).ready(function(){ 
    $("#result").load("partials/open.html");
    $("#open").on("click", function(){
        $("#result").load("partials/open.html");
      });
      $("#closed").on("click", function(){
        $("#result").load("partials/closed.html");
      });  
      $("#jacob").on("click", function(){
        $("#message-result").load("partials/jacob.html");
      }); 
      $("#pete").on("click", function(){
        $("#message-result").load("messages/pete.html");
      }); 
      $("#weston").on("click", function(){
        $("#message-result").load("messages/weston.html");
      }); 
});

$(document).ready(function(){ 
    $("#message-result").load("messages/pete.html");
     
});
