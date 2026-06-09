const banner = document.querySelector(".banner");
const buttons = document.querySelectorAll(".banner-btn");

// toggle page event
export default function handleBannerClick(pageState) {
  banner.addEventListener("click", (e) => {
    const targetBtn = e.target.closest(".banner-btn");

    // clear btn style
    if (targetBtn) {
      buttons.forEach((item) => {
        item.style.opacity = "0.5";
        item.querySelector(".banner-btn-content").style.boxShadow = "none";
        item.querySelector(".btn-highlight").style.display = "none";
      });

      // set target button style
      pageState.name = setBtnStyle(targetBtn.classList[1], targetBtn);
    }
  });
}

// toggle page btn event
function setBtnStyle(btnName, element) {
  element.style.opacity = "1";

  // change box shadow color
  element.querySelector(
    ".banner-btn-content"
  ).style.boxShadow = `8px 8px 0px 0px 
      ${btnName === "banner-rocket" ? "#bfc9f0" : "#eee5ff"} `;

  // show target highlight
  element.querySelector(".btn-highlight").style.display = "inline-block";

  // show target page
  if (btnName === "banner-rocket") {
    document.querySelector(".page-rocket").style.display = "block";
    document.querySelector(".page-space").style.display = "none";
    return "rocket";
  }
  if (btnName === "banner-space") {
    document.querySelector(".page-rocket").style.display = "none";
    document.querySelector(".page-space").style.display = "block";

    return "space";
  }
}
