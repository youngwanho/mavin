var prevScrollpos = window.pageYOffset;
const navLinks = gsap.utils.toArray(".navbar .nav-link");
const mobileNavLinks = gsap.utils.toArray(".m-navbar .nav-link");
const sectionPanel = gsap.utils.toArray(".panel");

// scroll header show and hide
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    $("#header").css("top", "0");
  } else if (prevScrollpos < currentScrollPos) {
    $("#header").css("top", "-80px");
  }
  prevScrollpos = currentScrollPos;
};

// nav link section
navLinks.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: ".panel" + (index + 1), offsetY: 0 },
    });
  });
});

// mobile nav link section
mobileNavLinks.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: ".panel" + (index + 1), offsetY: 0 },
    });
  });
});

// mobile nav link section
sectionPanel.forEach((sectionPanel, i) => {
  ScrollTrigger.create({
    trigger: sectionPanel,
    start: "top 40%",
    end: "center center",

    onEnter: () => {
      navLinks.forEach((e) => {
        e.classList.remove("active");
      });
      navLinks[i].classList.add("active");
    },
    onEnterBack: () => {
      navLinks.forEach((e) => {
        e.classList.remove("active");
      });
      navLinks[i].classList.add("active");
    },
  });
});

// mobile header
$("#header").on("click", "#btn_submenu", function () {
  $(".slide-menu").toggleClass("show");
  $(".backdrop").toggleClass("show");
});

$("#header").on("click", ".btn-close", function () {
  $(".slide-menu").toggleClass("show");
  $(".backdrop").toggleClass("show");
});

$(".slide-menu").on("click", ".nav-link", function () {
  $(".slide-menu").toggleClass("show");
  $(".backdrop").toggleClass("show");
});

$("body").on("click", ".backdrop", function () {
  $(".slide-menu").toggleClass("show");
  $(".backdrop").toggleClass("show");
});
