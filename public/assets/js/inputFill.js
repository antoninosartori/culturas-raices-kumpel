//seleccion del textarea mensaje
const inputTextArea = document.querySelector('.inputMensaje');
//seleccion de cards
const destinoCard1 = document.querySelector('#destino1');
const destinoCard2 = document.querySelector('#destino2');
const destinoCard3 = document.querySelector('#destino3');

function fillTextArea(destino){
    inputTextArea.textContent = `Hola! Quisiera obtener mas informacion sobre el paquete a ${destino}`;
}

destinoCard1.addEventListener('click', () => {
    fillTextArea('Roma');
})
destinoCard2.addEventListener('click', () => {
    fillTextArea('Londres');
})
destinoCard3.addEventListener('click', () => {
    fillTextArea('Europa completo');
})