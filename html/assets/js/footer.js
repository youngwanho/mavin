var isNameNotForm = false;
var isEmailNotForm = false;
var isMessageNotForm = false;

// user name form 
$("#input_name").on("change", function () {
  var inputName = $("#input_name").val();

  if (inputName.length < 2) {
    $(".name-error-text p").addClass("show");
    $("#input_name").addClass("focusing");
    isNameNotForm = false;
  } 
  else {
    $(".name-error-text p").removeClass("show");
    $("#input_name").removeClass("focusing");
    isNameNotForm = true;
  }
});

// user email form 
$("#input_email").on("change", function () {
  var inputEmail = $("#input_email").val();
  var emailExptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  if (emailExptext.test(inputEmail) == false) {
    $(".email-error-text p").addClass("show");
    $("#input_email").addClass("focusing");
    isEmailNotForm = false;
  } 
  else {
    $(".email-error-text p").removeClass("show");
    $("#input_email").removeClass("focusing");
    isEmailNotForm = true;
  }
});

// user message form 
$("#input_message").on("change", function () {
  var inputMessage = $("#input_message").val();

  if (inputMessage.length < 2) {
    $(".message-error-text p").addClass("show");
    $("#input_message").addClass("focusing");
    isMessageNotForm = false;
  } 
  else {
    $(".message-error-text p").removeClass("show");
    $("#input_message").removeClass("focusing");
    isMessageNotForm = true;
  }
});

// mail send status
$("#contact_form .form-control").on("change", function () {
  if (isNameNotForm && isEmailNotForm && isMessageNotForm) {
    $("#btn_mail").attr("disabled", false);
  } 
  else {
    $("#btn_mail").attr("disabled", true);
  }
});

// mail send alert
$("#btn_mail").on("click",function(){
  alert("메일이 정상적으로 발송되었습니다.")
});

// phone copy
$("#phone_copy").on("click",function(){
  var temp = $("<input>");
  $("body").append(temp);
  temp.val($("#phone_text").text()).select();
  document.execCommand("copy");
  temp.remove();
  $("#phone_copy").html("복사완료");
  $("#phone_copy").addClass("active");
});

// email copy
$("#email_copy").on("click",function(){
  var temp = $("<input>");
  $("body").append(temp);
  temp.val($("#email_text").text()).select();
  document.execCommand("copy");
  temp.remove();
  $("#email_copy").html("복사완료");
  $("#email_copy").addClass("active");
});