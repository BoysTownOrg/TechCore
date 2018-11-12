$(function(){

  var submit = document.getElementById("submit");
  var message = document.getElementById("result");
  submit.onclick = postData;

  const url = "https://script.google.com/macros/s/AKfycbyByyOda9rsKKSKIRTJGh01Lx6Jnl_Ao8lmbnAYmmAS_wa5eDJN/exec";

  function postData()
  {
    var name = document.getElementById("inputName").value;
    var outDate = document.getElementById("inputOutDate").value;
    var outTime = document.getElementById("inputOutTime").value;
    var returnDate = document.getElementById("inputInDate").value;
    var returnTime = document.getElementById("inputInTime").value;

    updateMessage(message,outDate,outTime,returnDate,returnTime);

    $.post(url, JSON.stringify({name: name, outDate: outDate, outTime: outTime,
    returnDate: returnDate, returnTime : returnTime}), function(data){
      console.log("yo");},"json");
  }

  function updateMessage(message,outDate,outTime,returnDate,returnTime)
  {
      message.innerHTML = "Success";
  }


});
