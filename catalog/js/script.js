const more = document.querySelector('.description__more');
const description = document.querySelector('.description__description')
more.addEventListener('click', ()=> {
    more.classList.add('description__more--hide');
    description.classList.add('description__description--show');
})