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

  $(document).ready(function() {
      $(".clickable-senator").click(function() {
        $("#anwar-showing").toggle();
        $("#anwar-hidden").toggle();
      });
    });
    $(document).ready(function() {
        $(".clickable-members-of-parliament").click(function() {
          $("#mpshowing").toggle();
          $("#mphidden").toggle();
        });
      });
      $(document).ready(function() {
          $(".clickable-women-rep").click(function() {
            $("#women-rep-showing").toggle();
            $("#women-rep-hidden").toggle();
          });
        });
        $(document).ready(function() {
            $(".clickable-mcas").click(function() {
              $("#mcas-showing").toggle();
              $("#mcas-hidden").toggle();
            });
          });
