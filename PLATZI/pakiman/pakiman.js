//objeto
class pakiman{
  constructor(nombre,v,a,d){

    //indicador
    this.imagen = new Image();
    this.vida= v;
    this.atk = a;
    this.def = d;
    this.nombre=nombre;
    this.imagen.src = imagenes[this.nombre]
  }
  hablar(){
    alert(this.nombre);
  }
  mostrar(){
      document.body.appendChild(this.imagen);
    document.write("<p>")
    document.write("<strong>" + this.nombre + "</strong>" + "<br/>");
      document.write("-----------------------<br/>");
        document.write("ataque:" + this.atk + "<br/>");
          document.write("defensa" + this.def);
              document.write("</p>");
  }
}
