// algoritmo que aplica descuentos random a las tarjetas de productos

//obtengo los elementos con la clase text dark y display 6
const elementoDescuento = document.querySelectorAll(".h6");

//iteramos por cada elemento y le aplicamos el descuento
elementoDescuento.forEach(element => {
    const descuentoRandom = Math.floor(Math.random()*21);
    if(descuentoRandom !== 0){
        element.textContent = `Descuento solo por hoy! ${descuentoRandom}%`;
    }
});