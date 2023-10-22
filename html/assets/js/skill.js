// slice button
$(function () {
  $(".skill-group li").slice(0, 4).show();
  $(".skill-group li").addClass(0, 4);
  $("#btn_load").click(function (e) {
    e.preventDefault();
    $(".skill-group li:hidden").slice(0, 4).show();

    if ($(".skill-group li:hidden").length == 0) {
      $("#btn_load").addClass("d-none");
      $(".skill-group").addClass("overflow-scroll");
      $(".skill-group").css("height", "50vh");
    }
  });
});

// gsap scroll animation
const skillList = document.querySelectorAll("#skill_group li");

skillList.forEach((element) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: "0% 75%",
      end: "80% 80%",
      toggleClass: "active",
      scrub: 1,
    },
    opacity: 1,
    marginTop: 15,
  });
});
