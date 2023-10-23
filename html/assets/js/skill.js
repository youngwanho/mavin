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
