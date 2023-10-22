// green shock
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// load component
$(function () {
  $("#section1").load("/components/views/introduce.html");
  $("#section2").load("/components/views/skill.html");
  $("#section3").load("/components/views/portfolio.html");
  $("#header").load("/components/header.html");
  $("#footer").load("/components/footer.html");
  $("#aside").load("/components/sideutil.html");
});

