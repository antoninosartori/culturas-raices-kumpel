let contador = 0;

const flechaIzq = document.querySelector('.flechaIzq')
const flechaDer = document.querySelector('.flechaDer')
const carruselImg = document.querySelector('.carruselImg')


//agregar fotos aca
const galeria = [
    './assets/img/carrusel/blue-winter-7615217_1280.jpg',
    './assets/img/carrusel/building-7616202_1280.jpg',
    './assets/img/carrusel/netherlands-7617882_1280.jpg',
];

carruselImg.setAttribute('src', galeria[contador]);

flechaDer.addEventListener('click', () => {
    contador++;
    if(contador > galeria.length - 1){contador = 0};
    carruselImg.setAttribute('src', galeria[contador]);
});

flechaIzq.addEventListener('click', () => {
    contador--;
    if(contador < 0){contador = galeria.length - 1};
    carruselImg.setAttribute('src', galeria[contador]);
});



