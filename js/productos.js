//clase
class ParPrecio{
    constructor(cantidad,precio){
        this.cantidad=cantidad;
        this.precio=precio;
    }
};
class Producto {
    constructor(nombre, precios,disclaimer,dirImagen) {
      this.nombre = nombre;
      this.precios = precios.slice();
      this.disclaimer = disclaimer;
      this.dirImagen = dirImagen;
    }
};

//funcion crear avisos
function crearAvisos(colProducto){
    //obtener cont .all
    const contALL = document.querySelector('.all');
    //crear fragmento
    var fragment = document.createDocumentFragment();
    for(productoActual of colProducto){
        //cont
        let contNew = document.createElement('DIV');
        contNew.setAttribute("class","cont");

        //img
        let imgCont = document.createElement('DIV');
        imgCont.setAttribute("class","imgcont"); 
        let newImg = document.createElement('IMG');
        newImg.setAttribute("src","../img/productos/"+productoActual.dirImagen+".jpg");
        newImg.setAttribute("alt","foto de " + productoActual.nombre);
        newImg.setAttribute("title",productoActual.nombre);
        //add
        imgCont.appendChild(newImg);
        contNew.appendChild(imgCont);

        //contp
        let contP = document.createElement('DIV');
        contP.setAttribute("class","contp");
        let newH3 = document.createElement('H3');
        newH3.textContent=productoActual.nombre;
        //add h3
        contP.appendChild(newH3);
        for(precioActual of productoActual.precios){
            let newP = document.createElement('P');
            newP.textContent=precioActual.cantidad + " KILO --- $" +precioActual.precio;
            //add p
            contP.appendChild(newP);
        }
        contNew.appendChild(contP);

        //disclaimer
        let newDis = document.createElement('DIV');
        newDis.setAttribute("class","disclaimer");
        let newPDis = document.createElement('P');
        newPDis.textContent=productoActual.disclaimer;
        //add
        newDis.appendChild(newPDis);
        contNew.appendChild(newDis);
        
        //add all a fragmento
        fragment.appendChild(contNew);
        
    }
    //add a pagina
    contALL.appendChild(fragment);
}
//get pagina
const tipo = window.location.pathname;
//agregar productos
let colProducto =[];
switch(tipo){
    case "/conservas.html":{
        colProducto = [
            new Producto("Higos con nueces en almibar",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Cerezas al Jugo",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Fondos de Alcachonfas",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Huesillos al Jugo",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Papayas al Jugo",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Mermelada de Mora",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Mermelada de Damasco",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Mermelada de Papaya",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Mermelada de Kiwi",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Mermelada de Frutilla",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Mermelada de Naranja",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Mermelada de Frambuesa",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Mermelada de Higo",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Mermelada de Alcayota y Nuez",[new ParPrecio("1","4.900")],null,"pan"),
            new Producto("Mermelada de Arandano",[new ParPrecio("1","4.900")],null,"pan")
        ];
        break;
    }
    case "/frutosemilla.html":{
        colProducto = [
            new Producto("Nueces Mariposa Chandler Blanca",[new ParPrecio("1","9.500"),new ParPrecio("1/2","5.000"),new ParPrecio("1/4","2.600")],null,"pan"),
            new Producto("Nueces Chandler Blanca",[new ParPrecio("1","8.000"),new ParPrecio("1/2","4.200"),new ParPrecio("1/4","2.200")],null,"pan"),
            new Producto("Almendras Enteras Non Pareil",[new ParPrecio("1","9.500"),new ParPrecio("1/2","5.000"),new ParPrecio("1/4","2.600")],null,"pan"),
            new Producto("Pasas Rubias y Yumbo",[new ParPrecio("1","4.500"),new ParPrecio("1/2","2.500"),new ParPrecio("1/4","1.300")],null,"pan"),
            new Producto("Ciruelas sin Carozo",[new ParPrecio("1","4.700"),new ParPrecio("1/2","2.500")],null,"pan"),
            new Producto("Huesillos Estandar",[new ParPrecio("1","4.700"),new ParPrecio("1/2","2.500")],null,"pan"),
            new Producto("Mani sin Sal",[new ParPrecio("1","4.000"),new ParPrecio("1/2","2.100"),new ParPrecio("1/4","1.100")],null,"pan"),

            new Producto("Semilla de Zapallo",[new ParPrecio("1","8.200"),new ParPrecio("1/2","4.200"),new ParPrecio("1/4","2.200")],null,"pan"),
            new Producto("Semilla de Linaza",[new ParPrecio("1","4.300"),new ParPrecio("1/2","2.200"),new ParPrecio("1/4","1.200")],null,"pan"),
            new Producto("Semilla de Chia",[new ParPrecio("1","5.500"),new ParPrecio("1/2","2.700"),new ParPrecio("1/4","1.500")],null,"pan"),
            new Producto("Semilla de Pistacho",[new ParPrecio("1","18.500"),new ParPrecio("1/2","10.000"),new ParPrecio("1/4","5.500")],null,"pan"),
            new Producto("Goji",[new ParPrecio("1","18.000"),new ParPrecio("1/2","10.000"),new ParPrecio("1/4","5.500")],null,"pan")
        ];
        break;
    }
    case "/legumbres.html":{
        colProducto = [
            new Producto("Porotos Tortolas y Burro",[new ParPrecio("1","3.200")],null,"pan.png"),
            new Producto("Porotos Rojos Grande",[new ParPrecio("1","2.600")],null,"pan.png"),
            new Producto("Porotos Blancos Grande",[new ParPrecio("1","2.600")],null,"pan.png"),
            new Producto("Garbanzos sin piel Grado 1",[new ParPrecio("1","2.600")],null,"pan.png"),
            new Producto("Lentejas de 6 mm",[new ParPrecio("1","2.000")],null,"pan.png")   
        ];
        break;
    }
    case "/mielmanjar.html":{
        colProducto = [
            new Producto("Miel Multifloral Untable",[new ParPrecio("1","5.500")],null,"pan.png"),
            new Producto("Miel Solido Natural de Ulmo con Propolio",[new ParPrecio("1","6.000")],null,"pan.png"),
            new Producto("Miel MSolida Natural de Ulmo",[new ParPrecio("1","6.000")],null,"pan.png"),
            new Producto("Manjar de Lucuma",[new ParPrecio("1","5.100")],null,"pan.png"),
            new Producto("Manjar de Nuez",[new ParPrecio("1","5.100")],null,"pan.png"),
            new Producto("Manjar de Coco",[new ParPrecio("1","5.100")],null,"pan.png")
        ];
        break;
    }
    case "/harinas.html":{
        colProducto = [
            
        ];
        break;
    }
    case "/paltahuevos.html":{
        colProducto = [
            
        ];
        break;
    }
};

//llamar a funcion y crear avisos
crearAvisos(colProducto);
console.log(window.location.pathname);
