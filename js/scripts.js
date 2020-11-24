$(document).ready(function(){ 
    $("#result").load("partials/open.html");
    $("#open").on("click", function(){
        $("#result").load("partials/open.html");
      });
      $("#closed").on("click", function(){
        $("#result").load("partials/closed.html");
      }); 
      $('#content').scrollTop($('#content')[0].scrollHeight);
      $('a').each(function() {
        $(this).data('href', $(this).attr('href')).removeAttr('href');
    }); 
    $("#newmessage").on("click", function(){
      $("#message-result").load("messages/new.html");
    });
});

