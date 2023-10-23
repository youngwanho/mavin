// green shock
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// load component
$(function () {
  $("#header").load("/components/header.html");
  $("#aside").load("/components/sideutil.html");
  // $("#section1").load("/components/views/introduce.html");
  // $("#section2").load("/components/views/skill.html");
  // $("#section3").load("/components/views/portfolio.html");
  $("#footer").load("/components/footer.html");
});

