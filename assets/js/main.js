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
    var cardStyles = window.getComputedStyle(elements);
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


//Modal Features

const dialog = document.getElementById('generalDialog')

var parent;
var children;
var index;

function modalPopulate() {

    var modalImgElem = dialog.querySelector('.modal-img');
    var modalSubtitleElem = dialog.querySelector('.modal-subtitle');
    var modalTitleElem = dialog.querySelector('.modal-title');
    var modalBodyElem = dialog.querySelector('.modal-description');
    var modalCounterElem = dialog.querySelector('.modal-counter');
    var modalNavigation = dialog.querySelector('.modal-navigation');
    var videoSrc = children[index].querySelector('.card').hasAttribute('videoSrc') ? children[index].querySelector('.card').getAttribute('videoSrc') : null;
    var imgValue = children[index].querySelector('.card').hasAttribute('imgSrc') ? children[index].querySelector('.card').getAttribute('imgSrc') : null;
    var subtitleValue = children[index].querySelector('.card-subtitle') ? children[index].querySelector('.card-subtitle').innerHTML : null;
    var titleValue = children[index].querySelector('.card-title') ? children[index].querySelector('.card-title').innerHTML : null;
    var longDescriptionValue = children[index].querySelector('.long-description') ? children[index].querySelector('.long-description').innerHTML : null;

    modalSubtitleElem.innerHTML = subtitleValue;
    modalTitleElem.innerHTML = titleValue;
    modalBodyElem.innerHTML = longDescriptionValue;
    modalCounterElem.innerHTML = (index + 1) + "/" + children.length;
    if (children.length == 1) {
        modalNavigation.classList.add('d-none');
    } else {
        modalNavigation.classList.remove('d-none');
    }

    if (videoSrc != null) {
        console.log(videoSrc)
        modalImgElem.innerHTML = "<video controls autoplay playsinline class='w-100' src='" + videoSrc + "'></video>";
    } else if (imgValue != null) {
        modalImgElem.innerHTML="<img class='w-100' src='"+imgValue+"'>";
    }

}

function openModal(elem) {
    indexSelected(elem);
    modalPopulate()
}

function indexSelected(elem) {
    parent = elem.parentNode;
    children = Array.prototype.slice.call(parent.children);
    index = children.indexOf(elem);
    console.log(parent, children, index, elem);
}

function scrollActions() {

    const headerElem = document.getElementById('mainHeader');
    var scrollPosition = document.documentElement.scrollTop;

    if (scrollPosition > 80) {
        headerElem.classList.add('fixed');
    } else {
        headerElem.classList.remove('fixed');
    }
}

function modalBack() {
    if (index > 0 && index < children.length) {
        index = index - 1;
    } else {
        index = children.length - 1;
    }
    modalPopulate()
}

function modalNext() {
    if (index >= 0 && (index + 1) < children.length) {
        index = index + 1;
    } else {
        index = 0;
    }
    modalPopulate()
}

// Event listner when page is scrolling
window.addEventListener('scroll', (event) => {
    scrollActions()
});

// Event listner when page is loaded
window.addEventListener('DOMContentLoaded', (event) => {
    scrollDiv('cards', null);
    scrollDiv('gallery', null);
    //Update viewWidth variable
    viewWidth = window.innerWidth;
});

//Event listner when page is resizing
window.addEventListener('resize', (event) => {
    scrollDiv('cards', null);
    scrollDiv('gallery', null);
    // update viewWidth variable
    viewWidth = window.innerWidth;
    
    if (viewWidth > lg) {
        let navbar = document.querySelector('.navbar-collapse');
        if (navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    }

});

window.onload = function () {
    folderVideo.play();
}