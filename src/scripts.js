$(document).ready(function () {

  $(".hide-toggle-navbar").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $("#loadData").load("pages/inicio.html", function () {    
    $(window).scrollTop(0);
    window.location.hash = "#/";
  });

  var router = function (route) {
    switch (route) {
      case "#/":
        $("#loadData").load("pages/inicio.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#inicio").addClass("active");
        });        
        break;
      case "#/discografia":
        $("#loadData").load("pages/discografia.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#discografia").addClass("active");
        });        
        break;
      case "#/videos":
        $("#loadData").load("pages/videos.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#videos").addClass("active");
        });        
        break;
      case "#/biografia":
        $("#loadData").load("pages/biografia.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#biografia").addClass("active");
        });        
        break;
      case "#/gira":
        $("#loadData").load("pages/gira.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#gira").addClass("active");
        });        
        break;
      case "#/contacto":
        $("#loadData").load("pages/contacto.html", function () {
          $(window).scrollTop(0);
          $(".nav-item").removeClass("active");
          $("#contacto").addClass("active");
        });        
        break;
      default:
        $("#loadData").load("404.html", function () {
          $(window).scrollTop(0);
        });
    }
  };
  $(window).on("hashchange", function (e) {
    router(window.location.hash);
  });  
});
