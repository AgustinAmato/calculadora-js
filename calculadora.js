window.addEventListener('load', ()=>{/*Escuchamos cuando se carga el documento*/

/*CREAMOS DOS CONSTANTES Y NOS GUARDAMOS LOS ELEMENTOS QUE NECESITAMOS*/
const display = document.querySelector('.calculator-display');
const keypadButtons = document.getElementsByClassName('keypad-button');


/*CREAMOS OTRA CONSTANTE PARA CONVERTIR EL HTMLCOLLECTION A ARRAY*/
const keypadButtonsArray = Array.from(keypadButtons);

/*ITERAMOS POR NUESTRO NUEVO ARRAY DE BOTONES */ 
keypadButtonsArray.forEach((button) =>{

    /*A CADA BOTON LE AGREGAMOS UN LISTENER */
   button.addEventListener('click', ()=>{
    calculadora(button, display);
   })
})
});

function calculadora(button, display){
    switch (button.innerHTML){
        case 'C':
            borrar(display);
            break;
         
        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display){
  display.innerHTML = eval(display.innerHTML)/*Tomar el string, resolverlo y guardarlo en el innerHTML del display*/ 
}

function actualizar(display, button){
    if(display.innerHTML ==0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML= 0;
}



























