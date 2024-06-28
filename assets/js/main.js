// Codigo do carrossel de cards
var viewWidth = window.innerWidth;
var sm = 0;
var md = 768;
var lg = 992;
var xl = 1200;
var xxl = 1400;

var folderVideo = document.getElementById('folderVideo');


function scrollDiv(id, direction) {
    var targetElem = document.getElementById(id);
    var cardsStyles = window.getComputedStyle(targetElem);
    var cardsPadding = parseInt(cardsStyles.paddingLeft);

    var elements = targetElem.children[0];
    var cardStyles = window.getComputedStyle(elements) ;
    var cardWidth = parseInt(cardStyles.width);

    var steps = 1;

    if (viewWidth >= xxl) {
        steps = 4;
    } else if (viewWidth >= xl) {
        steps = 3;
    } else if (viewWidth >= lg) {
        steps = 2;
    } else if (viewWidth >= md) {
        steps = 1;
    }

    if (direction == 'right') {
        targetElem.scrollLeft += (cardWidth) * steps;
    }
    if (direction == 'left') {
        targetElem.scrollLeft -= (cardWidth) * steps;
    }
    if (direction == null) {
        targetElem.scrollLeft = 0;
    }

}

// Funcao que disparo quando faço scroll
function scrollActions() {

    const headerElem = document.getElementById('mainHeader');
    var scrollPosition = document.documentElement.scrollTop;

    if (scrollPosition > 80) {
        headerElem.classList.add('fixed');
    } else {
        headerElem.classList.remove('fixed');
    }
}

// Event listner quando a pagina esta sofrendo scroll
window.addEventListener('scroll', (event) => {
    scrollActions()
});

// Event listner quando a pagina esta carregada
window.addEventListener('DOMContentLoaded', (event) => {
    scrollDiv('cards', null);
    scrollDiv('cards-transaction', null);
    //Update viewWidth variable
    viewWidth = window.innerWidth;
});

//Event listner quando a janela esta sendo redimensionada 
window.addEventListener('resize', (event) => {
    scrollDiv('cards', null);
    scrollDiv('cards-transaction', null);
    // update viewWidth variable
    viewWidth = window.innerWidth;
    
    if (viewWidth > lg) {
        let navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    }
});