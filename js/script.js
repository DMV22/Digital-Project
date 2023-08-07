////////////////////////////////
// Бургер-меню при малих екранах
function burgerMenu() {
  const menu = document.querySelector("#menu");
  const burger = document.querySelector("#burger");

  function hideMenu() {
    menu.classList.add("hidden");
  }

  burger.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  window.addEventListener("resize", hideMenu);
}
burgerMenu();

///////////////////////////////
// Слайдер для перемикання фото
const leftArrow = document.querySelector(".main-slider__button--prev");
const rightArrow = document.querySelector(".main-slider__button--next");
const sliderImages = document.querySelectorAll(".main-image__photo");
const slideNumbers = document.querySelectorAll(".main-slide__number");
let currentSlide = 0;
let isChangingSlide = false;

function changeSlide(direction) {
  if (isChangingSlide) return;
  isChangingSlide = true;
  setTimeout(() => {
    isChangingSlide = false;
  }, 500);

  sliderImages[currentSlide].classList.remove("visible");
  slideNumbers[currentSlide].classList.remove("active");
  if (direction === "left") {
    currentSlide =
      (currentSlide - 1 + sliderImages.length) % sliderImages.length;
  } else if (direction === "right") {
    currentSlide = (currentSlide + 1) % sliderImages.length;
  }
  sliderImages[currentSlide].classList.add("visible");
  slideNumbers[currentSlide].classList.add("active");
}

leftArrow.addEventListener("click", () => changeSlide("left"));
rightArrow.addEventListener("click", () => changeSlide("right"));
sliderImages[currentSlide].classList.add("visible");
slideNumbers[currentSlide].classList.add("active");

leftArrow.addEventListener("click", () => changeSlide("left"));
rightArrow.addEventListener("click", () => changeSlide("right"));

sliderImages[currentSlide].classList.add("visible");

///////////////////////////////////////////////////
// Зміна тексту та відступів при на веденні на фото
function adjustTextSize(image, projectInfo) {
  const width = image.offsetWidth;
  const projectText = projectInfo.querySelector(".project-info__text");

  if (width > 500) {
    projectText.style.fontSize = "64px";
    projectText.style.lineHeight = "64px";
    projectText.style.marginBottom = "14px";
    projectInfo.style.padding = "48px 78px";
  } else if (width > 400) {
    projectText.style.fontSize = "48px";
    projectText.style.lineHeight = "48px";
    projectText.style.marginBottom = "12px";
    projectInfo.style.padding = "62px 80px";
  } else if (width > 300) {
    projectText.style.fontSize = "42px";
    projectText.style.lineHeight = "42px";
    projectText.style.marginBottom = "12px";
    projectInfo.style.padding = "68px 50px";
  } else if (width > 200) {
    projectText.style.fontSize = "28px";
    projectText.style.lineHeight = "28px";
    projectText.style.marginBottom = "10px";
    projectInfo.style.padding = "84px 44px";
  }
}

function handleWindowResize() {
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((projectItem) => {
    const image = projectItem.querySelector(".projects-grid__image");
    const projectInfo = projectItem.querySelector(".project-info");
    adjustTextSize(image, projectInfo);
  });
}

window.addEventListener("load", handleWindowResize);
window.addEventListener("resize", handleWindowResize);
