let contador = 0;

const flechaIzq = document.querySelector('.flechaIzq')
const flechaDer = document.querySelector('.flechaDer')
const carruselImg = document.querySelector('.carruselImg')


//agregar fotos aca
const galeria = [
    './assets/img/carrusel/grupocubacultural1.jpg',
    './assets/img/carrusel/grupoAzc2022.jpg',
    './assets/img/carrusel/grupoTucumanfolclorico.jpg',
    './assets/img/carrusel/grupoenGualeguay.jpg',
    './assets/img/carrusel/grupoenMontevideo.jpg',
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



