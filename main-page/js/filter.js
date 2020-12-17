const filterElements = Array.from(document.querySelectorAll('.filter__element'));
const filterButtons = document.querySelector('.filter__buttons');

filterButtons.addEventListener('click', event => {
    const name = event.target.getAttribute('name') || event.target.parentNode.getAttribute('name');
    if(name) {
        filterElements.forEach(element => {
            element.classList.add('filter__element--hide');
            if(element.getAttribute('name').indexOf(name) != -1) {
                element.classList.remove('filter__element--hide');
            }
        });
    }
})

