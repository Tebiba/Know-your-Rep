//function myFunction() {
  //var x = document.getElementById("governor");
  //if (x.style.display === "none") {
  //  x.style.display = "block";
//  } else {
//    x.style.display = "none";
//  }
//}

$(document).ready(function() {
    $(".clickable").click(function() {
      $("#twaha-showing").toggle();
      $("#twaha-hidden").toggle();
    });
  });
