// swiper slider
var swiper = new Swiper(".visual-swiper", {
  effect: "cards",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// gsap section1 scale animation
gsap.to(".s1-animation", {
  scrollTrigger: {
    trigger: ".s1-animation",
    start: "0% 60%",
    end: "100% 120%",
    scrub: 1,
  },
  width: "100%",
});
