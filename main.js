//Para escuchar cuando se carga el documento
window.addEventListener('load', (e)=> {
    //Creamos dos constantes y nos guardamos los elementos que necesitamos
    const display= document.querySelector('.calculator-display')
    const buttons= document.getElementsByClassName('keypad-button');
    
    //Creamos otra constante para convertir el HTMLCollection a Array
    const buttonsArray= Array.from(buttons);
    //Iteramos nuestro nuevo array(lista) de botones
    buttonsArray.forEach((button)=> {
        //A cada boton le agregamos un listener
       button.addEventListener('click', ()=>{
            console.log(button.innerHTML);
            calculadora(button, display);
       })
    })
})

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

         case '=':
            calcular(display);
            break;
            
        case 'Del':
            borra(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) //tomar el string y resolverlo y guardarlo en el inneTHML del display
}

function actualizar(display, button){
    if (display.innerHTML==0){
    display.innerHTML='';
    }
    display.innerHTML += button.innerHTML;    
    //
}

function borrar(display){
    display.innerHTML = 0;
}