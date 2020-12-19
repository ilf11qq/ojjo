const filterElement = {
    brand: 'default',
    price: 'default',
    who: 'default',
    collection: 'default',
    season: 'default',
    event: 'default'
}
const filterMenu = document.querySelector('.filter__menu');
const selects = document.querySelectorAll('.filter__menu select');
const filterElements = document.querySelector('.filter__elements');
let data;
fetch("./data.json")
        .then(response => response.json())
        .then(json => {
            data = json;
            renderCatalog(json)
        });
selects.forEach(element => {
    element.addEventListener('change', event => {
        filterElement[event.target.name] = event.target.value;
        console.log(filterElement)
        renderCatalog(data);
    })
});
const isRender = element => {
    if ((filterElement.brand === 'default' || element.title === filterElement['brand'])
    && (filterElement.price === 'default' || element.price < filterElement['price'])
    && (filterElement.who === 'default' || element.who === filterElement['who'])
    && (filterElement.collection === 'default' || element.collection === filterElement['collection'])
    && (filterElement.season === 'default' || element.season === filterElement['season'])
    && (filterElement.event === 'default' || element.event === filterElement['event'])) {
        console.log(2)
        return true;
    }
    console.log(1)
    return false
}
const renderCatalog = data => {
    let result = '';
    data.map(element => {
        if (isRender(element)) {
            result += `
            <a href="${element['link']}" class="filter__element">
                <img src="${element['img']}" alt="${element['img-alt']}" class="filter__image">
                <p class="filter__subtitle">${element['subtitle']}</p>
                <p class="filter__title">${element['title']}</p>
                <div class="filter__price">${element['price']}Р</div>
            </a>
            `
        }
    })
    filterElements.innerHTML = result;
}
// filterMenu.addEventListener('click', () => {
//     fetch("./data.json")
//     .then(response => response.json())
//     .then(json => renderCatalog(json));
// })



const more = document.querySelector('.description__more');
const description = document.querySelector('.description__description')
more.addEventListener('click', ()=> {
    more.classList.add('description__more--hide');
    description.classList.add('description__description--show');
})