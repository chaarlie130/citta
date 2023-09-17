
///////////////////////////////////////////start of portrait documentation////////////////////////////////
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
var nxtbtn = document.querySelector('.next-button');
const cards = document.querySelector('.cards');
const cardElements = document.querySelectorAll('.card');
let currentIndex = 0;

function updateSlider() {
    cardElements.forEach((card, index) => {
        const offset = (index - currentIndex) * 100;
        card.style.transform = `translateY(${offset}%)`;
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, cardElements.length - 1);
    updateSlider();
});

// Initial update
updateSlider();

///////////////////////////////////////////end of portrait documentation////////////////////////////////


///////////////////////////////////////////start of landscape documentation////////////////////////////////





///////////////////////////////////////////end of landscape documentation////////////////////////////////

const land_leftbtn = document.querySelector('.leftSQRBTTN');
const land_rightbtn = document.querySelector('.rightSQRBTTN');
const lscards = document.querySelector('.lscards');
const lscardElements = document.querySelectorAll('.lsCard');
let land_currentIndex = 0;





function update_land_slider() {

    lscardElements.forEach((lscard, lsindex) => {
        const offset = (lsindex - land_currentIndex) * 100;
        lscard.style.transform = `translateX(${offset}%)`;
    });
    if ((document.getElementsByClassName('lsCard')[0]).style.transform == 'translateX(0%)') { change_img_info_to('dental') }
    if ((document.getElementsByClassName('lsCard')[1]).style.transform == 'translateX(0%)') { change_img_info_to('italian') }
    if ((document.getElementsByClassName('lsCard')[2]).style.transform == 'translateX(0%)') { change_img_info_to('ramen') }
}

land_leftbtn.addEventListener('click', () => {
    land_currentIndex = Math.max(land_currentIndex - 1, 0);
    update_land_slider();
});

land_rightbtn.addEventListener('click', () => {
    land_currentIndex = Math.min(land_currentIndex + 1, lscardElements.length - 1);
    update_land_slider();
});

// Initial update
update_land_slider();

function change_img_info_to(img) {
    if (img == 'dental') {
        document.getElementsByClassName('imgtitle')[0].innerHTML = 'Complex Page - From $199';
        document.getElementsByClassName('imgdesc')[0].innerHTML = 'Scheduling, Contact, Multiple pages, and more.';
        document.getElementsByClassName('imglink')[0].innerHTML = 'Learn More';
    }
    else if (img == 'italian') {
        document.getElementsByClassName('imgtitle')[0].innerHTML = 'Informational layout - From $125';
        document.getElementsByClassName('imgdesc')[0].innerHTML = 'A template that has all important information on one single scroll-through page.';
        document.getElementsByClassName('imglink')[0].innerHTML = 'Learn More';
    }
    else if (img == 'ramen') {
        document.getElementsByClassName('imgtitle')[0].innerHTML = 'Multi-page layout - From $175';
        document.getElementsByClassName('imgdesc')[0].innerHTML = 'This template offers page navigation to an assortment of endpoints.';
        document.getElementsByClassName('imglink')[0].innerHTML = 'Learn More';
    }
}
















