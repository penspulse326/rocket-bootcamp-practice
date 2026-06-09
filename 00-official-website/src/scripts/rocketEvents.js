import { expContent, coachName } from "./constants.js";
const coachList = document.querySelector(".bootcamp-coach-list");
const coachText = document.querySelector(".coach-exp");

// toggle coach desktop
export function handleCoachClick() {
  coachList.addEventListener("click", (e) => {
    // clear items' style
    const coaches = coachList.querySelectorAll("li");
    coaches.forEach((item) => {
      item.querySelector("div").style.background = "white";
    });

    // set target style
    const li = e.target.closest("li");
    li.querySelector("div").style.background = "#e5ebff";
    changeCoach(li.classList[0]);
  });
}
// change coach's description
function changeCoach(name) {
  const expIndex = coachName.indexOf(name);
  if (expIndex !== -1) {
    coachText.innerHTML = expContent[expIndex];
  }
}

// toggle coach mobile
// execute only mobile page rocket
export function handleCoachScroll() {
  let currentIndex = 0;

  coachList.addEventListener("scroll", () => {
    const scrollLeft = coachList.scrollLeft;
    const wrapperWidth = coachList.clientWidth;

    // calculate from left to right
    const centerLeft = scrollLeft + wrapperWidth / 2;
    const centerRight = scrollLeft + wrapperWidth / 2;

    // find which card is center
    let centeredImage = null;

    const images = Array.from(coachList.querySelectorAll("li"));
    for (const image of images) {
      const imageLeft = image.offsetLeft;
      const imageRight = image.offsetLeft + image.offsetWidth;

      if (imageLeft <= centerLeft && imageRight >= centerRight) {
        centeredImage = image;
        break;
      }
    }

    if (centeredImage) {
      // get center image's index
      const imageIndex = Array.from(images).indexOf(centeredImage);

      // check current index or exp-text will execute flash animation again
      if (currentIndex !== imageIndex) {
        currentIndex = imageIndex;
        coachText.innerHTML = expContent[imageIndex];
      }
    }
  });
}

// about animation
// execute only desktop page rocket
export function handleAboutScroll() {
  // calculete height and set event when scroll at window's v-center
  const targetHeight = document.querySelector(".about-rocket").offsetHeight;
  const targetStart = (window.innerHeight - targetHeight) / 2;
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about-rocket",
        markers: false,
        pin: true,
        scrub: true,
        start: `top: ${targetStart}`,
      },
    })
    .to(".job-list", {
      transform: "translateY(calc(-100% * 1 / 3 - 32px))",
    });
}
