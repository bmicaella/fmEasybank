const btnOverlay = document.querySelector('.overlay')
const header = document.querySelector('.header')
const fadeElements = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

function menuHamburguer() {
    console.log('open hamburguer')

    if(header.classList.contains('open')) { //close menu
        header.classList.remove('open')
        body.classList.remove('noscroll')

        fadeElements.forEach(function(element) {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })

        /* if (btnOverlay.classList.contains('fade-in')) { //animation
            btnOverlay.classList.remove('fade-in')
            btnOverlay.classList.add('fade-out')
        } */
        
    } else { //open menu
        header.classList.add('open')
        body.classList.add('noscroll')
        fadeElements.forEach(function(element) {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })

        /* if (btnOverlay.classList.contains('fade-out')) { //animation
            btnOverlay.classList.remove('fade-out')
            btnOverlay.classList.add('fade-in')
        } */
        
    }

}
