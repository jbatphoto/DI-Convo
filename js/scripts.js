$(document).ready(function(){ 
    $("#result").show("partials/open.html");
    $("#open").on("click", function(){
        $("#result").load("partials/open.html");
      });
      $("#closed").on("click", function(){
        $("#result").load("partials/closed.html");
      });  
});