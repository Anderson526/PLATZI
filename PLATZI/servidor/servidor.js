//servidor
var express = require("express");
var aplicacion = express();


aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado){
resultado.send("este es el <strong>curso</strong>");
}
//segunda entrada

function cursos(peticion, resultado){
resultado.send("<h1>BIENVENIDO</h1>");

}
aplicacion.listen(8989);
