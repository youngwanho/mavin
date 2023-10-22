// elevator button
const elevatorBtn = document.querySelector(".btn-elevator");

elevatorBtn.addEventListener("click", () => gsap.to(window, { scrollTo: 0 }));
gsap.to(elevatorBtn, {
  y: 0,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "top top",
    toggleActions: "play none reverse none",
  },
});

// side util list hide & show
$(".btn-plus").on("click", function () {
  $(".btn-link").toggleClass("show");
  $("#btn_plus .plus-icon").toggleClass("hide");
  $("#btn_plus .close-icon").toggleClass("hide");
});
