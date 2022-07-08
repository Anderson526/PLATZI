//imagenes
var imagenes = [];
imagenes["cauchin"] = "pollo.webp";
imagenes["lobito"] = "lobo.webp";
imagenes["tocinaurio"] = "vaca.webp";


var coleccion =[];
coleccion.push(new pakiman("cauchin",100,35,54));
coleccion.push(new pakiman("lobito",120,10,35));
coleccion.push(new pakiman("tocinaurio",100,52,64));

for(var p of coleccion){

p.mostrar();

}

for(x in coleccion){
  console.log(x);
}
