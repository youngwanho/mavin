const horizontal = $(".horizontal-sliders");
const slideItems = gsap.utils.toArray(".item-slide");
const slideCards = document.querySelectorAll(".horizontal-sliders .item-card");

// gsap scroll trigger
let scrollTween = gsap.to(slideItems, {
  xPercent: -150 * (slideItems.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: horizontal,
    start: "top top",
    anticipatePin: 1,
    invalidateOnRefresh: true,
    pin: horizontal,
    pinSpacing: true,
    scrub: 1,
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

