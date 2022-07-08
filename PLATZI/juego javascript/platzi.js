var vp = document.getElementById('villa');
var papel =vp.getContext("2d");

document.addEventListener("keydown",dibujarPollo);
//llamar dibujarPollo
var pollox= 250;
var polloy= 250;
var mov= 60;
//mover pollo
function dibujarPollo(event){

  var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT:37,
    RIGHT: 39
  };



switch (event.keyCode) {
  case teclas.UP:
var polloy= polloy-mov;
  dibujarPollito(pollox,polloy);
    break;
    case teclas.DOWN:
  var polloy= polloy+mov;
    dibujarPollito(pollox,polloy);
      break;
      case teclas.LEFT:
      var pollox= pollox-mov;
        dibujarPollito(pollox,polloy);
          break;

          case teclas.RIGHT:
          var pollox= pollox+mov;
            dibujarPollito(pollox,polloy);

              break;

  default:


}

}



//-----


var fondo ={
  url:"tile.png",
  cargaOk: false
};

//URL POLLO
var pollo ={
  url:"pollo.webp",
  cargaOk: false
};

//aparecer cerdito

var cerdo={
  url:"cerdo.png",
  cargaOk: false
};

//AGRAGAR IMAGENES
pollo.imagen = new Image();
pollo.imagen.src =pollo.url;
pollo.imagen.addEventListener("load",cargarPollo);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
//llamar cerdito
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

// cargar imagenes
function cargarPollo(){
  pollo.cargaOk =true;
  dibujarPollito();
}

function cargarFondo(){
  fondo.cargaOk =true;
  dibujar();
}

function cargarCerdo(){
  cerdo.cargaOk =true;

  dibujar();
}

//--------------------


function dibujar(){
  if(fondo.cargaOk ){
    papel.drawImage(fondo.imagen,0, 0);
  }
  //----
  if(cerdo.cargaOk ){
      var cantidad = aleatorio(1,10);
for(var i=0; i<cantidad; i++){

  var x= aleatorio(0, 420);
  var y= aleatorio(0, 420);
  papel.drawImage(cerdo.imagen,x, y);
}
  }
}


function dibujarPollito(){
  if(pollo.cargaOk){
  papel.drawImage(pollo.imagen, pollox, polloy);
}

}





//vacas aleatorio

function aleatorio(min, max){
  var res;
  res= Math.floor(Math.random()*(max-min+1))+min;
  return res;

}
