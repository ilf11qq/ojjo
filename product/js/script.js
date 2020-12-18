const mainPicture = document.getElementById("product-image-main");
const pictures = document.querySelector(".product__mini-images");
const more = document.querySelector('.description__more');
const description = document.querySelector('.description__description')

pictures.addEventListener('click', event => {
    if (event.target.nodeName == 'IMG') {
        console.log(1)
        mainPicture.src = event.target.src;
    }
})


more.addEventListener('click', ()=> {
    more.classList.add('description__more--hide');
    description.classList.add('description__description--show');
})