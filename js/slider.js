import {cardsBlock, cardsData} from './constants.js';


function renderCard(data) {
    return `<li class="blog__card" style="background: url('${data.imgSrc}') top left no-repeat и;">
    <p class="blog__card__title">${data.title}</p>
    <p class="blog__card__data">${data.date}</p>

    </li>`
}

export const render = cardsBlock.innerHTML = cardsData.map(card => 
    renderCard(card)).join('')