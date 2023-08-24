// algoritmo que aplica descuentos random a las tarjetas de productos

//obtengo los elementos con la id tarjetaJs
const elementoDescuento = document.querySelectorAll("#tarjetaJs");

//iteramos por cada elemento y le aplicamos el descuento
elementoDescuento.forEach(element => {
    const descuentoRandom = Math.floor(Math.random()*21);
    if(descuentoRandom !== 0){
        element.textContent = `Descuento solo por hoy! ${descuentoRandom}%`;
    }
});