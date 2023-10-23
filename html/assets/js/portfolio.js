const horizontal = $(".horizontal-sliders");
const slideItems = gsap.utils.toArray(".item-slide");
const slideCards = document.querySelectorAll(".horizontal-sliders .item-card");
ScrollTrigger.config({autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"});

// gsap scroll trigger
let scrollTween = gsap.to(slideItems, {
  xPercent: -150 * (slideItems.length - 1),
  ease: "none",
  scrollTrigger: {
    start: "top top",
    trigger: horizontal,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    // markers: true,
    end: "+=3000",
  },
});

// gsap trigger card animation
slideCards.forEach((element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      containerAnimation: scrollTween,
      start: "left center",
      toggleActions: "play none none none",
      toggleClass: "active",
    },
  })
})

