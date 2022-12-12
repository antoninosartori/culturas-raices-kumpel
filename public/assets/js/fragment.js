const destinosDiv = document.querySelector('#destinosContainer');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
//btn
const btnNacional = document.querySelector('.btnNacional');
const btnInternacional = document.querySelector('.btnInternacional');
const btnAll = document.querySelector('.btnAll');

async function getDestinos() {
    const dataFetch = await fetch('./public/assets/js/destinos.json');
    const response = await dataFetch.json();

    pintarCardsDestinos(response)
    return destinosArray = response;
}

btnNacional.addEventListener('click', () => {
    let scrollY = window.scrollY;
    
    let isNacional = destinosArray.filter(destino => destino.isNacional);
    pintarCardsDestinos(isNacional);

    btnNacional.classList.add('btnFilterActive');
    btnInternacional.classList.remove('btnFilterActive');
    btnAll.classList.remove('btnFilterActive');

    window.scrollTo(0, scrollY);
})

btnInternacional.addEventListener('click', () => {
    let scrollY = window.scrollY;
    
    let isInternacional = destinosArray.filter(destino => !destino.isNacional);
    pintarCardsDestinos(isInternacional);

    btnNacional.classList.remove('btnFilterActive');
    btnInternacional.classList.add('btnFilterActive');
    btnAll.classList.remove('btnFilterActive');

    window.scrollTo(0, scrollY);
})

btnAll.addEventListener('click', () => {
    let scrollY = window.scrollY;
    
    btnAll.classList.toggle('btnFilterActive');
    pintarCardsDestinos(destinosArray);

    btnNacional.classList.remove('btnFilterActive');
    btnInternacional.classList.remove('btnFilterActive');
    btnAll.classList.add('btnFilterActive');

    window.scrollTo(0, scrollY);
})



const pintarCardsDestinos = destinos => {
    destinosDiv.textContent = '';
    let destinoLength = destinos.length
    destinos.map(destino => {
        if(destinoLength === 1){
            templateCard.querySelector('.destinos').classList.add('m-auto','col-md-6', 'col-lg-4', 'mb-4');
        } else if(destinoLength <= 3){
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
            const spanDateTravel = document.createElement('span');
            spanDateTravel.classList.add('fs-0', 'fw-medium', 'ms-2');
            spanDateTravel.textContent = `${date}`;
            divDateTravel.append(spanDateTravel);
        })

        const spanDaysTravel = document.createElement('span');
        spanDaysTravel.classList.add('fs-0','fw-medium');
        spanDaysTravel.textContent = `${destino.days}`;
        divDateTravel.append(spanDaysTravel);



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
