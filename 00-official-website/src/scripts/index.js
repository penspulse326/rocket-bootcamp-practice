import handleBannerClick from "./bannerEvents.js";
import {
  handleAboutScroll,
  handleCoachClick,
  handleCoachScroll,
} from "./rocketEvents.js";
import { spaceCarousel } from "./spaceEvents.js";

// execute event while page is loaded
document.addEventListener("DOMContentLoaded", () => {
  // loading event code
  handleBannerClick(pageState);
});

// define pageName object
const pageState = { name: null };

Object.defineProperty(pageState, "name", {
  get() {
    return this._value;
  },
  set(newValue) {
    this._value = newValue;
    checkIsMoblie(newValue);
  },
});

// check device type
function checkIsMoblie(pageName) {
  const isMobile = window.matchMedia("(max-width: 428px)").matches;
  // add event by device and page
  if (pageName === "rocket") {
    if (isMobile) {
      handleCoachScroll();
    } else {
      handleAboutScroll();
      handleCoachClick();
    }
  }
  if (pageName === "space") {
    spaceCarousel();
  }
}
