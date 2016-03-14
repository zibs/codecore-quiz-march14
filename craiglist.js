$(document).ready(function() {
  var links = $("a");
  for (var i = 0; i < links.length; i++) {
    if (links[i].text.includes("eal")) {
      $(links[i]).css({color: "red"});
    }
  }
});
