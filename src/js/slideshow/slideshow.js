var slideIndex = 1;
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');
const slides = document.getElementsByClassName('slide-content');
const dots = document.getElementsByClassName('dot');
showSlide(slideIndex);

prevButton.onclick = () => {
    slideIndex--;
    showSlide(slideIndex);
}

nextButton.onclick = () => {
    slideIndex++;
    showSlide(slideIndex);
}

function showSlide(n) {
    let i;
    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].classList.add('active');
}