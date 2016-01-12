$(document).ready(function() {
  $(".DOMclick").click(function() {
    $("#DOM-showing").toggle();
    $("#DOM-hidden").toggle();
    $(this).toggleClass("black");
  });

  $(".JavaClick").click(function() {
    $("#JavaScript-showing").toggle();
    $("#JavaScript-hidden").toggle();
  });

  $(".ModuloClick").click(function() {
    $("#Modulo-showing").toggle();
    $("#Modulo-hidden").toggle();
  });

  $(".OperatorsClick").click(function() {
    $("#Operators-showing").toggle();
    $("#Operators-hidden").toggle();
  });

  $(".BooleansClick").click(function() {
    $("#Booleans-showing").toggle();
    $("#Booleans-hidden").toggle();
  });


});
