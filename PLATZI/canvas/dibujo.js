//ID canvas
var l = document.getElementById('canvas');
var lienzo = l.getContext("2d");
var ancho = l.width;



//boton y texto
var text =document.getElementById('texto1');
var botoncito = document.getElementById("boton");
botoncito.addEventListener("click", dibujoPorClick);

//color del dibujoPorClick
var colorsito =document.getElementById('color');


//funcion del dibujo
function dibujoPorClick(){
var colorin=colorsito.value;
var x= parseInt(text.value);
var espacio = ancho/x;
var count = 0;
var yinicial,xfinal;
//console.log(lienzo);

while(count<x){
  yinicial=espacio*count;
  xfinal=espacio*(count+1);
  dibujar(colorin,0,yinicial,xfinal,300);
  console.log("linea"+ count);
  count++;
}
//segunda figura
var xin,yfi;
var count2=0;

while(count2<x){
  xin=espacio*count2;
  yfi=espacio*(count2+1);
  dibujar(colorin,xin,0,300,yfi);
//  console.log("linea"+ count2);

  count2++;
}


dibujar(colorin,1,1,1,300);
dibujar(colorin,1,300,300,300);



}
//funcion del dibujo
function dibujar(colorin,xi,yi,xf,yf){

  lienzo.beginPath();
  lienzo.strokeStyle = colorin;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf,yf);
  lienzo.stroke();
  lienzo.closePath();

}
