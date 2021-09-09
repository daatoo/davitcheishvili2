const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('topO')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})
const tel1 = document.getElementsByClassName('tel1')[0]
const shesvla = document.getElementsByClassName('shesvla')[0]
const siaxleebi5 = document.getElementsByClassName('siaxleebi5')[0]
const tel = document.getElementsByClassName('tel')[0]
const more = document.getElementsByClassName('more')[0]
const kont = document.getElementsByClassName('kont')[0]
const links12 = document.getElementsByClassName('links12')[0]
const links11 = document.getElementsByClassName('links11')[0]
const links10 = document.getElementsByClassName('links10')[0]
const links9 = document.getElementsByClassName('links9')[0]
const links8 = document.getElementsByClassName('links8')[0]
const links7 = document.getElementsByClassName('links7')[0]
const linksO1 = document.getElementsByClassName('linksO1')[0]
const linksO = document.getElementsByClassName('linksO')[0]
const links1 = document.getElementsByClassName('links1')[0]
const links2 = document.getElementsByClassName('links2')[0]
const links3 = document.getElementsByClassName('links3')[0]
const links4 = document.getElementsByClassName('links4')[0]
const links5 = document.getElementsByClassName('links5')[0]
const links6 = document.getElementsByClassName('links6')[0]
const morecar = document.getElementsByClassName('morecar')[0]
const bestseller = document.getElementsByClassName('bestseller')[0]
const servisebitext = document.getElementsByClassName('servisebitext')[0]
const login = document.getElementsByClassName('login1')[0]
const header = document.getElementsByClassName('header')[0]
const body = document.getElementsByClassName('body')[0]
const checkbox = document.getElementsByClassName('checkboxO')[0]
checkbox.addEventListener('change', () => {
    body.classList.toggle('dark') 
    header.classList.toggle('dark')
    login.classList.toggle('dark')
    servisebitext.classList.toggle('dark')
    bestseller.classList.toggle('dark')
    morecar.classList.toggle('dark')
    links1.classList.toggle('dark')
    links2.classList.toggle('dark')
    links3.classList.toggle('dark')
    links4.classList.toggle('dark')
    links5.classList.toggle('dark')    
    links6.classList.toggle('dark')
    links7.classList.toggle('dark')
    links8.classList.toggle('dark')
    links9.classList.toggle('dark')
    links10.classList.toggle('dark')
    links11.classList.toggle('dark')
    links12.classList.toggle('dark')
    linksO1.classList.toggle('dark')
    linksO.classList.toggle('dark')
    kont.classList.toggle('dark')
    tel.classList.toggle('dark')
    tel1.classList.toggle('dark')
    siaxleebi5.classList.toggle('dark')
    shesvla.classList.toggle('dark')
    more.classList.toggle('dark')
})


let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

