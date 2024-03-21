const overlay = document.querySelector('.overlay')
const iconDeletePopup = document.querySelector('.popup-icon')

function hiddenPopup() {
    overlay.style.display = 'none'
}

overlay.onclick = hiddenPopup
iconDeletePopup.onclick = hiddenPopup
