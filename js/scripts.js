$(document).ready(function(){ 
    $("#open").on("click", function(){
        $("#result").load("partials/open.html");
      });
      $("#closed").on("click", function(){
        $("#result").load("partials/closed.html");
      });  
});