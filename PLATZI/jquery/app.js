$(document).ready(function(){
//codigo jquery


console.log("funcionando");
//agregar codigo
$("h1").html("etiqueta h1");
$(".clase1").html("desde clase");

  document.querySelector("h1").innerHTML = "etiqueta h1";
$(".conteiner").append("<h1>nuevo texto");
//css
$(".conteiner").css("color", "blue");
$(".conteiner").css({
  padding:"15px", border: "solid red 15px" , background : "salmon"


});

$("img").attr("src", "https://code.jquery.com/jquery-wp-content/themes/jquery/content/donate.png");
$("img:last").attr("width", "300");

})
