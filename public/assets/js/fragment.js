/* let destinos = [
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
];
 */
const destinosDiv = document.querySelector('#destinosContainer');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

async function getDestinos() {
    const dataFetch = await fetch('./public/assets/js/destinos.json');
    const response = await dataFetch.json();

    pintarCardsDestinos(response)
}

const pintarCardsDestinos = destinos => {

    let destinoLength = destinos.length
    destinos.map(destino => {
        
        if(destinoLength <= 3){
            templateCard.querySelector('.destinos').classList.add('col-md-6', 'col-lg-4', 'mb-4');
        } else{
            templateCard.querySelector('.destinos').classList.add('col-md-6', 'col-lg-6', 'mb-4');
        }

        templateCard.querySelector('.card-img-top').src = destino.image;
        templateCard.querySelector('.card-img-top').alt = destino.title;
        templateCard.querySelector('.card-title').textContent = destino.title;
        templateCard.querySelector('.card-title-locations').textContent = destino.locations;
        const divDateTravel = templateCard.querySelector('.card-date');
        divDateTravel.textContent = '';
        destino.travel_date.map(date => {
            //  templateCard.querySelector('.card-date').textContent = date
            const spanDateTravel = document.createElement('span');
            spanDateTravel.classList.add('fs-0', 'fw-medium');
            spanDateTravel.textContent = `${date}`;
            divDateTravel.append(spanDateTravel);
        })


        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });

    destinosDiv.append(fragment)
    let cards = document.querySelectorAll('.card-destiny .card-body');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            let title = card.querySelector('.card-title').textContent;
            
            fillTextArea(title);
        })
    })
}

getDestinos()
