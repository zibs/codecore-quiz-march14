$(document).ready(function(){
  $("#fetch-companies").on("click", function() {
    $.ajax({
      url: "http://localhost:3000/companies.json",
      method: "GET",
      errors: function(){
        alert("Something went wrong...Please try again");
      },
      success: function(data){
        $("#companies-wrapper").html("");
        var template = $("#company_template").html();
        var companies = data.companies;
        for (var i = 0; i < companies.length; i++) {
          companies[i].products = companies[i].products.join(", ");
          var renderedHtml = Mustache.render(template, companies[i]);
          // setInterval(function() {
            $("#companies-wrapper").append(renderedHtml);
          // }, 50);
        }
      }
    });
    $(".post-wrap").fadeIn(500);
  });
});
