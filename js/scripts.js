$(document).ready(function() {
  $("#userInfo form").submit(function(event) {

    //use .each to loop through html elements
    var userNameInput = $("#userName").val();
    var userStreetInput = $("#userStreet").val();
    var userCityInput = $("#userCity").val();
    var userStateInput = $("#userState").val();
    var userZipcodeInput = $("#userZipcode").val();

    $("#userNameReciept").text("Name: " + userNameInput);
    $("#userAddressReceipt").text("Address: " + userStreetInput + userCityInput + userZipcodeInput + userStateInput);
    $("#receipt").show();
    event.preventDefault();
  });
});
