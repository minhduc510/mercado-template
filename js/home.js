$(document).ready(function () {
    $('.banner-slide').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        speed: 1000,
    });
});

const scroolbox = document.querySelector('.scroolbox')

setInterval(() => {
    const listScroolbox = document.querySelectorAll('.scroolbox li')
    const cloneNone = listScroolbox[0].cloneNode(true)
    scroolbox.appendChild(cloneNone)
    setTimeout(() => {
        listScroolbox[0].remove()
    }, 1000)
    listScroolbox[0].style.height = '0'
    listScroolbox[0].style.paddingTop = '0'
    listScroolbox[0].style.paddingBottom = '0'
}, 3000)

const overlay = document.querySelector('.overlay')
const iconDeletePopup = document.querySelector('.popup-icon')

function hiddenPopup() {
    overlay.style.display = 'none'
}

overlay.onclick = hiddenPopup
iconDeletePopup.onclick = hiddenPopup
