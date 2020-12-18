const more = document.querySelector('.filter__more');
const description = document.querySelector('.filter__description')
more.addEventListener('click', ()=> {
    more.classList.add('filter__more--hide');
    description.classList.add('filter__description--show');
})