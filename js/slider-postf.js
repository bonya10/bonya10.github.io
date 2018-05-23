let mainSliderSelector = ".main-slider",
  navSliderSelector = ".nav-slider",
  interleaveOffset = 0;
// Main Slider
let mainSliderOptions = {
  loop: true,
  loopAdditionalSlides: 10,
  grabCursor: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    
    imagesReady: function() {
      this.el.classList.remove("loading");
     
    }
   
    
  }
};
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
// Navigation Slider
let navSliderOptions = {
  loop: true,
  loopAdditionalSlides: 10,
 
  spaceBetween: 5,
  slidesPerView: 5,
  centeredSlides: true,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  direction: "vertical",
  on: {
    imagesReady: function() {
      this.el.classList.remove("loading");
    }
  }
};
let navSlider = new Swiper(navSliderSelector, navSliderOptions);
// Matching sliders
mainSlider.controller.control = navSlider;
navSlider.controller.control = mainSlider;
