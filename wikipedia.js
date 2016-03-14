$(document).ready(function(){
  $("a").click(function(event){
    event.preventDefault();
    $(this).fadeOut();
  });
});
