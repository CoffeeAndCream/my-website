// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
$(document).ready(function () {
  $("#default-constructor-button").click(function() {
    var element = $('#default-constructor');
    if(element.hasClass("showed")){
          element.removeClass("showed").removeClass("slideInLeft").addClass("slideOutLeft").show();
    }
    else{
      element.addClass("showed").removeClass("slideOutLeft").addClass("slideInLeft").show();
    }
  });
});
$(document).ready(function () {
  $("#constructor-button").click(function() {
    var element = $('#constructor');
    if(element.hasClass("showed")){
          element.removeClass("showed").removeClass("slideInLeft").addClass("slideOutLeft").show();
    }
    else{
      element.addClass("showed").removeClass("slideOutLeft").addClass("slideInLeft").show();
    }
  });
});
$(document).ready(function () {
  $("#destructor-button").click(function() {
    var element = $('#destructor');
    if(element.hasClass("showed")){
          element.removeClass("showed").removeClass("slideInLeft").addClass("slideOutLeft").show();
    }
    else{
      element.addClass("showed").removeClass("slideOutLeft").addClass("slideInLeft").show();
    }
  });
});
$(document).ready(function () {
  $("#education-button").click(function() {
    var element = $('#education');
    if(element.hasClass("showed")){
          element.removeClass("showed").removeClass("slideInLeft").addClass("slideOutLeft").show();
    }
    else{
      element.addClass("showed").removeClass("slideOutLeft").addClass("slideInLeft").show();
    }
  });
});
$(document).ready(function () {
  $("#job-button").click(function() {
    var element = $('#job');
    if(element.hasClass("showed")){
          element.removeClass("showed").removeClass("slideInLeft").addClass("slideOutLeft").show();
    }
    else{
      element.addClass("showed").removeClass("slideOutLeft").addClass("slideInLeft").show();
    }
  });
});
$(document).ready(function () {
  $("#resume-button").click(function() {
    var element = $('#resume');
    if(element.hasClass("showed")){
          element.removeClass("showed").removeClass("slideInLeft").addClass("slideOutLeft").fadeOut();
    }
    else{
      element.addClass("showed").removeClass("slideOutLeft").addClass("slideInLeft").fadeIn();
    }
  });
});
