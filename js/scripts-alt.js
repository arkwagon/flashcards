$(document).ready(function() {
  // $(".DOMclick").click(function() {
  //   $("#DOM-showing").toggle();
  //   $("#DOM-hidden").toggle();
  // });
  //
  // $(".JavaClick").click(function() {
  //   $("#JavaScript-showing").toggle();
  //   $("#JavaScript-hidden").toggle();
  // });
  //







  $(".cardfront").click(function() {
    console.log("yay kittens");
    console.log(this.id + "-back");

    $("#" + this.id + "-back").toggle();
    //$(".cardfront").toggle();
  });


});
