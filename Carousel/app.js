let slideIndex = 1;
let autoPlayInterval;
showSlides(slideIndex);
autoPlaySlides();

function nextSlide() {
    showSlides(slideIndex += 1);
    resetAutoplay();
}

function prevSlide() {
    showSlides(slideIndex -= 1);
    resetAutoplay();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoplay();
}

function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-item");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
        slides[i].classList.remove("active");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].className += " active";
}

//autoplay
function autoPlaySlides() {
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 3000);
}

//resetting autoplay
function resetAutoplay() {
    clearInterval(autoPlayInterval);
    autoPlaySlides();
}
