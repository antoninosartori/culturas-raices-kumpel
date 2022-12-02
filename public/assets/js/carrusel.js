let contador = 0;

const flechaIzq = document.querySelector('.flechaIzq');
const flechaDer = document.querySelector('.flechaDer');
const carruselImg = document.querySelector('.carruselImg');
const carruselImgTitle = document.querySelector('.carruselImg-title');

//agregar fotos aca => ['url-de-la-foto-', 'titulo-de-la-foto'],
const galeria = [
    ['./public/assets/img/carrusel/grupocubacultural1.jpg','grupo Cuba'],
    ['./public/assets/img/carrusel/grupoAzc2022.jpg','grupo en Azcuenaga'],
    ['./public/assets/img/carrusel/grupoTucumanfolclorico.jpg','grupo en Tucuman'],
    ['./public/assets/img/carrusel/grupoenGualeguay.jpg','grupo de Gualeguay'],
    ['./public/assets/img/carrusel/grupoenMontevideo.jpg','grupo en Montevideo'],
];

//iniciando con la img [0]
carruselImg.setAttribute('src', galeria[contador][0]);
carruselImg.setAttribute('alt', galeria[contador][1]);
carruselImgTitle.textContent = galeria[contador][1];

flechaDer.addEventListener('click', () => {
    contador++;
    if(contador > galeria.length - 1){contador = 0};
    carruselImg.setAttribute('src', galeria[contador][0]);
    carruselImg.setAttribute('alt', galeria[contador][1]);
    carruselImgTitle.textContent = galeria[contador][1];
});

flechaIzq.addEventListener('click', () => {
    contador--;
    if(contador < 0){contador = galeria.length - 1};
    carruselImg.setAttribute('src', galeria[contador][0]);
    carruselImg.setAttribute('alt', galeria[contador][1]);
    carruselImgTitle.textContent = galeria[contador][1];
});





