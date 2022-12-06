// nodos
const destinosContainer = document.querySelector('#destinosContainer');

// llamado a la api 
async function getDestinos () {
    const fetchJson = await fetch('./public/assets/js/destinos.json');
    const response = await fetchJson.json()

    createCard(response)
}

// funcion constructora de cards
function createCard(destinos) {
    const destinosLength = destinos.length;
    
    destinos.map(destino => {        
        const divDestinos = document.createElement('div');
        if(destinosLength < 3){divDestinos.classList.add('destinos', 'col-md-6', 'col-lg-4','mb-4');}
        else{divDestinos.classList.add('destinos', 'col-md-6', 'col-lg-6','mb-4');}

        const divCard = document.createElement('div');
        divCard.classList.add('card', 'overflow-hidden', 'shadow');

        const imgDestino = document.createElement('img');
        imgDestino.classList.add('card-img-top', 'imgDestino');
        imgDestino.src = destino.image;
        imgDestino.alt = destino.title;

        const divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body', 'py-4', 'px-3');
        
        const divCardBtn = document.createElement('div');
        divCardBtn.classList.add('text-center', 'mb-3');

        const aBtnQuieroDestino = document.createElement('a');
        aBtnQuieroDestino.classList.add('btn', 'btn-primary', 'btn-lg', 'me-md-4', 'mb-3', 'mb-md-0', 'border-0', 'primary-btn-shadow', 'bg-lightbrown');
        aBtnQuieroDestino.href = "#contacto";
        aBtnQuieroDestino.role = "button";
        aBtnQuieroDestino.textContent = '¡Quiero este viaje!';

        const divTitleContainer = document.createElement('div');
        divTitleContainer.classList.add('d-flex', 'flex-column', /* 'flex-lg-row', */'justify-content-between', 'mb-3')

        const h4Title = document.createElement('h4');
        h4Title.classList.add('text-secondary' ,'fw-medium');

        const aTitleContent = document.createElement('a');
        aTitleContent.classList.add('link-900', 'text-decoration-none', 'stretched-link', 'fw-bold');
        aTitleContent.href = "#contacto";
        aTitleContent.textContent = destino.title;

        const divLocationContainer = document.createElement('div');
        divLocationContainer.classList.add('d-flex', 'flex-row' , /* 'flex-lg-row', */'justify-content-between', 'mb-1')

        const h4Location = document.createElement('h4');
        h4Location.classList.add('text-secondary' ,'fw-medium');

        const aLocationContent = document.createElement('a');
        aLocationContent.classList.add('locationCard','link-900', 'text-decoration-none', 'fs-1');
        aLocationContent.href = "#contacto";
        aLocationContent.textContent = destino.locations;

        const divInfoCard = document.createElement('div');
        divInfoCard.classList.add('d-flex' ,'align-items-center');

        const divDateTravel = document.createElement('div');
        divDateTravel.classList.add('d-flex', 'flex-column');

        destino.travel_date.map(date => {
            const spanDateTravel = document.createElement('span');
            spanDateTravel.classList.add('fs-0', 'fw-medium');
            spanDateTravel.textContent = `${date}`;
            divDateTravel.append(spanDateTravel);
        })

        divInfoCard.append(divDateTravel)
        h4Title.append(aTitleContent)
        divTitleContainer.append(h4Title)
        h4Location.append(aLocationContent)
        divLocationContainer.append(h4Location)
        divCardBody.append(divTitleContainer,divLocationContainer, divInfoCard);
        divCardBtn.append(aBtnQuieroDestino)
        divCard.append(imgDestino,divCardBody,divCardBtn)
        divDestinos.append(divCard)
        destinosContainer.append(divDestinos)

        divCard.addEventListener('click', () => {
            fillTextArea(destino.title, destino.travel_date)
        })
    })
}

getDestinos()