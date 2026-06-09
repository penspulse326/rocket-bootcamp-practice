const carousel = document.querySelector(".carousel");

// carousel animation
export function spaceCarousel() {
  let totalWidth = -24;

  const carouselItems = carousel.querySelectorAll("li");
  carouselItems.forEach((item) => {
    totalWidth += item.offsetWidth + 24;
  });

  gsap.fromTo(
    carousel,
    {
      x: 0,
    },
    {
      x: -totalWidth + window.innerWidth,
      duration: 20,
      repeatDelay: 1.5,
      repeat: -1,
      yoyo: "true",
      ease: "none",
    }
  );
}
