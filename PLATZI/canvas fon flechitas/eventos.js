document.addEventListener("keyup",dibujarTeclado);
//ENTORNO 2D
var cuadrito =document.getElementById('area');
var papel = cuadrito.getContext("2d");

var x=150;
var y=150;
//funcion teclado
function dibujarTeclado(event){

//funcion dibujo


//dibujar("red",100,100,250,250,papel);

  function dibujar(colorin,xi,yi,xf,yf,lienzo){

    lienzo.beginPath();
    lienzo.strokeStyle = colorin;
    lienzo.lineWidh = 3;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf,yf);
    lienzo.stroke();
    lienzo.closePath();

  }

//switch
var color="blue";
var mov = 10;
  switch (event.keyCode) {
    case  teclas.UP:

    dibujar(color,x,y,x,y - mov,papel);
    y = y- mov;
      break;

    case  teclas.DOWN:

    dibujar(color,x,y,x,y + mov,papel);
    y = y + mov;
      break;

      case  teclas.RIGHT:

      dibujar(color,x,y,x + mov,y,papel);
      x = x + mov;

        break;

        case  teclas.LEFT:

        dibujar(color,x,y,x - mov,y,papel);
        x = x - mov;
          break;
    default:

    console.log("orta tecla");


  }
}


//variables literales

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT:37,
  RIGHT: 39
};


console.log(teclas);
