const burger = document.querySelector('.burger__icon');
const burgerContent = document.querySelector('.burger__content');

document.body.addEventListener('click', e => {
    if(e.target != burger) {
        burger.classList.remove('burger__icon--active');
        burgerContent.classList.remove('burger__content--active');
    }
})

burger.addEventListener('click', () => {
    burger.classList.toggle('burger__icon--active');
    burgerContent.classList.toggle('burger__content--active');
})
