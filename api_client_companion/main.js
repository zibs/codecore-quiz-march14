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
          var company_loop = $(".post-wrap");
          for (var j = 0; j < company_loop.length; j++) {
              $(company_loop[j]).delay(50*j).fadeIn(500);
          }
        }
      }
    });
  });
  // $(document).on("click", "a", function(event) {
  //   event.preventDefault();
  //
  //   $.ajax({
  //     url: "http://localhost:3000/companies/",
  //     data: {company: { likes: 1} },
  //     method: "PATCH",
  //     error: function(){
  //         alert("Something went wrong!");
  //     },
  //     success: function(data) {
  //       console.log("liked");
  //     }
  //   });
  // });

});
