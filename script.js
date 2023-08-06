const tl = gsap.timeline();
tl.to("#main", {
  x: "0%",
  delay: 2,
  ease: "power3.inOut",
  duration: 2,
})
  .from("#logo", {
    opacity: 0,
    ease: "power3.inOut",
    duration: 2,
    y: -20,
  })
  .from("#navbar ul li", {
    opacity: 0,
    ease: "power3.inOut",
    duration: 2,
    y: -20,
    stagger: 0.2,
  })
  .from("#login", {
    opacity: 0,
    ease: "power3.inOut",
    duration: 2,
    y: -20,
    stagger: 0.2,
  })
  .from("#mainsection img", {
    opacity: 0,
    ease: "power3.inOut",
    duration: 2,
    x: -20,
    stagger: 0.3,
  })
  .to("#letter-section div", {
    ease: "power3.inOut",
    duration: 2,
    y: "0%",
  });
