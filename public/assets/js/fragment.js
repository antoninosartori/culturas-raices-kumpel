let destinos = [
    {
        "id": 0,
        "title": "Sabor a Colombia",
        "locations": "Medellin, Bogota, Cartagena",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/View_of_the_Cerro_Morrogacho_in_the_C%C3%B3cora_Valley.jpg/1280px-View_of_the_Cerro_Morrogacho_in_the_C%C3%B3cora_Valley.jpg",
        "days": 16,
        "travel_date": ["19 de marzo"]
    },
    {
        "id": 1,
        "title": "Villa Gesell",
        "locations": "Buenos Aires",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Villa_Gesell_-_panoramio_-_VANT_Vistas_A%C3%A9reas_%285%29_%28cropped%29.jpg/1920px-Villa_Gesell_-_panoramio_-_VANT_Vistas_A%C3%A9reas_%285%29_%28cropped%29.jpg",
        "days": 10,
        "travel_date": ["Enero: 07-12–17–22","6 de Febrero"]
    },
    {
        "id": 2,
        "title": "Mar del Plata",
        "locations": "Buenos Aires",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Stensj%C3%B6lejon_i_Mar_del_Plata.jpg/1280px-Stensj%C3%B6lejon_i_Mar_del_Plata.jpg",
        "days": 10,
        "travel_date": ["Enero: 04–09–14–19–24","Febrero 03–08–13–21"]
    },
    {
        "id": 3,
        "title": "Las Grutas",
        "locations": "Rio Negro",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/M%C3%89DANOS_.jpg/800px-M%C3%89DANOS_.jpg",
        "days": 10,
        "travel_date": ["9 - 23 de Enero","6 de Febrero"]
    }
]
;

const destinosDiv = document.querySelector('#destinosContainer');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();


const pintarCardsDestinos = destinos => {
    destinos.forEach(destino => {
        templateCard.querySelector('.card-img-top').src = destino.image;
        templateCard.querySelector('.card-img-top').alt = destino.title;
        templateCard.querySelector('.card-title').textContent = destino.title;
        templateCard.querySelector('.card-title-locations').textContent = destino.locations;
        templateCard.querySelector('.card-date').textContent = destino.travel_date;

        console.log(destino)


        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });

    destinosDiv.append(fragment)
    let cardDestiny = templateCard.querySelector('.card-destiny');
    cardDestiny.addEventListener('click', () => {
        fillTextArea(destino.title, destino.days)
    })
}

pintarCardsDestinos(destinos)
