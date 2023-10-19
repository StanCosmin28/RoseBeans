/* GSAP effect for the cup */
gsap.fromTo("#coffeeapp", { x: 1000 }, { x: 0, duration: 1, delay: 0.2 });
gsap.fromTo("#titleapp", { x: -1000 }, { x: 0, duration: 1, delay: 0.2 }), "<";

gsap.fromTo(
  "#coffeeapp",
  { y: -30 },
  { y: 10, duration: 2, yoyo: true, repeat: -1 }
),
  "<";
gsap.fromTo(
  "#coffeeapp",
  { rotate: "-5deg" },
  {
    rotate: "5deg",
    duration: 1,
    yoyo: true,
    repeat: -1,
  }
),
  "<";
gsap.fromTo("#ab", { y: -1000 }, { y: 0, duration: 1.5 }, "<");

gsap.fromTo("#le", { y: -1000 }, { y: 0, duration: 1.5, delay: 0.5 }, "<");

gsap.fromTo("#co", { y: -1000 }, { y: 0, duration: 1.5, delay: 0.5 }, "<");

gsap.fromTo(
  "#flwapp",
  { rotate: "5deg" },
  {
    rotate: "-5deg",
    duration: 1.2,
    yoyo: true,
    repeat: -1,
    delay: 0.3,
  }
);
