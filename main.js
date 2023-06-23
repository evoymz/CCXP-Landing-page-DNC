
/* FUNCAO QUE ADICIONA BORDA PELO ID 

function addRedBorder (id) {
    element = document.querySelector(`#${id}`);
    element.style.border = '5px solid red';
}

addRedBorder('thursday'); */

const ingressos = [];

function highlightCard(selector) {

    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight"); //toggle eh interruptor, se tiver on bota off se tiver off bota on.
    
    }
    
    
    function checkKeyboardCode() { //FUNCAO PARA DETECTAR O KEY CODE DA TECLA P PODER USAR DEPOIS COM ESSER CODIGO
        document.addEventListener("keydown", (event) => {
            var name = event.key;
            var code = event.code;
            alert(`tecla pressionada ${name} \r\n key code: ${code}`);
        }, false);
    }
    
    
    function addKeyboardEventListeners() { /*FUNCAO PARA DETECTAR O INGRESSO A PARTIR DO EVENTO DE TECLADO, QUIE PEGUEI OS CODIGOS NA FUNCAO ACIMA*/
        document.addEventListener("keydown", (event) => {
            var ing1 = document.getElementById("thursday");
            var ing2 = document.getElementById("friday");
            var ing3 = document.getElementById("saturday");
            var ing4 = document.getElementById("sunday");
    
            var code = event.code;
            if(code == 'Digit1') {
                ing1.classList.toggle("card-highlight");
                ing2.classList.remove("card-highlight");
                ing3.classList.remove("card-highlight");
                ing4.classList.remove("card-highlight");
            } if(code == 'Digit2') {
                ing1.classList.remove("card-highlight");
                ing2.classList.toggle("card-highlight");
                ing3.classList.remove("card-highlight");
                ing4.classList.remove("card-highlight");
            } if (code == 'Digit3') {
                ing1.classList.remove("card-highlight");
                ing2.classList.remove("card-highlight");
                ing3.classList.toggle("card-highlight");
                ing4.classList.remove("card-highlight");
            } if (code == 'Digit4') {
                ing1.classList.remove("card-highlight");
                ing2.classList.remove("card-highlight");
                ing3.classList.remove("card-highlight");
                ing4.classList.toggle("card-highlight");
            }
        }, false);
    }
    

    

selectCard = (selector) => {
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector);
}

showSelectedCards = () => {
    if(ingressos.length > 0) alert("Ingressos Selecionados " + ingressos);
}

addKeyboardEventListeners()