const popupButton = document.getElementById("popup-button")
const closeButton = document.getElementById("close-button")
const popupBoxConatiner = document.getElementById("popup-box")

popupButton.addEventListener('click', () => {
    popupBoxConatiner.classList.add('active')
})

closeButton.addEventListener('click', () => {
    popupBoxConatiner.classList.remove('active')
})