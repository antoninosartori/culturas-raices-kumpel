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
    destinos.map(destino => {
        const divDestinos = document.createElement('div');
        divDestinos.classList.add('destinos', 'col-md-4', 'mb-4');

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
        divTitleContainer.classList.add('d-flex', 'flex-column', 'flex-lg-row','justify-content-between', 'mb-3')

        const h4Title = document.createElement('h4');
        h4Title.classList.add('text-secondary' ,'fw-medium');

        const aTitleContent = document.createElement('a');
        aTitleContent.classList.add('link-900', 'text-decoration-none', 'stretched-link');
        aTitleContent.href = "#contacto";
        aTitleContent.textContent = destino.title;

        const divInfoCard = document.createElement('div');
        divInfoCard.classList.add('d-flex' ,'align-items-center');

        const spanDays = document.createElement('span');
        spanDays.classList.add('fs-0', 'fw-medium');
        spanDays.textContent = `${destino.days} dias`;

        divInfoCard.append(spanDays)
        h4Title.append(aTitleContent)
        divTitleContainer.append(h4Title)
        divCardBody.append(divTitleContainer, divInfoCard);
        divCardBtn.append(aBtnQuieroDestino)
        divCard.append(imgDestino,divCardBody,divCardBtn)
        divDestinos.append(divCard)
        destinosContainer.append(divDestinos)

        divCard.addEventListener('click', () => {
            fillTextArea(destino.title, destino.days)
        })
    })
}

getDestinos()