//class
class Billete{
  constructor(v,c){
    this.valor = v;
    this.cantidad = c;
  }
}

//funcion entregar dinero
function entregarDinero(){
//ingresar dinero
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);


  for(var bi of caja){

    if(dinero >0){
//flotante a entero redondeado
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad){
        papeles = bi.cantidad;
      }else{
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero -= (bi.valor * papeles);
    }
  }

  if(dinero > 0){

    resultado.innerHTML = ("no hay mas dinero");
  }else{
    for(var e of entregado){
      if(e.cantidad > 0){
    resultado.innerHTML +=  (e.cantidad + "billetes de $" + e.valor+ "<br/>");
    }
  }
}


}

//array y push
var caja = [];
var entregado = [];
caja.push( new Billete(120,10));
caja.push( new Billete(50,10));
caja.push( new Billete(20,5));
caja.push( new Billete(10,8));

var dinero;
var div=0;
var div=0;
//resultado
var resultado = document.getElementById("res");
//listener boton
var b = document.getElementById("extraer");
b.addEventListener("click",entregarDinero);
//algoritmo
