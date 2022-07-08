//red canvas
var x = document.getElementById("rojo");
var lienzo1 = x.getContext("2d");
rojo.addEventListener("click",rojoListener );
lienzo1.font ="16px Arial";
function rojoListener(){
    lienzo1.fillText("rojo", 10, 50);
}

//blue canvas
var x1 = document.getElementById("blue");
var lienzo2 = x1.getContext("2d");
blue.addEventListener("click",blueListener );
lienzo2.font ="16px Arial";
function blueListener(){
    lienzo2.fillText("azul", 10, 50);
}
//yellow canvas
var x3 = document.getElementById("yellow");
var lienzo3 = x3.getContext("2d");
yellow.addEventListener("click",yellowListener );
lienzo3.font ="16px Arial";
function yellowListener(){
    lienzo3.fillText("yellow", 10, 50);
}

//green canvas
var x4 = document.getElementById("green");
var lienzo4 = x4.getContext("2d");
green.addEventListener("click",greenListener );
lienzo4.font ="16px Arial";
function greenListener(){
    lienzo4.fillText("verde", 10, 50);
}

//multiplicacion
  var num = 0;
 var con=0;
 var mul=0;
while (num>10 || num<1) {

  var num = prompt("ingrese un numero del 1 al 10");
  if(num>10 || num<1 ){
    alert("valor no valido");
  }else{
    document.write("TABLA DE MULTIPLICAR DEL"+ num+"<br>");
      for(var i=0; i<10; i++){
  con++;
     mul= num * con;


document.write(num+"*"+con+"="+mul);
document.write("<br>");
      }

  }

}
