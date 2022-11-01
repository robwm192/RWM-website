const main = document.querySelector(".main");
const sideNav = document.querySelector(".sidenav");

// save original text elements in dictionary for later
const text_dict = {};
const weight_dict = {};
for (const child of sideNav.children) {
  text_dict[child] = child.textContent;
  weight_dict[child] = child.style.fontWeight;
}

// abbreviations for when side bar minimised
const abbr_dict = {};
for (const child of sideNav.children) {
  // split by space or "."
  let word_list = text_dict[child].split(/[ .]/);
  if (word_list.length > 1) {
    abbr_dict[child] = word_list[0][0] + word_list[1][0];
  } else {
    abbr_dict[child] = word_list[0][0] + word_list[0][1];
  }
}

// side bar starts minimised, bold abbreviated text
sideNav.style.width = "92px"; // 1/3 of normal size
main.style.marginLeft = "92px";
for (const child of sideNav.children) {
  child.textContent = abbr_dict[child];
  child.style.fontWeight = 600;
}

// show full side bar when hovering over side bar area
const btnShow = document.querySelector("#buttonshow");
function handleMouseOver() {
  sideNav.style.width = "222px";
  main.style.marginLeft = "222px";
  for (const child of sideNav.children) {
    child.textContent = text_dict[child];
    child.style.fontWeight = weight_dict[child];
  }
}
btnShow.addEventListener("mouseover", handleMouseOver);

// minimise side bar again when hovering over main
const btnHide = document.querySelector("#buttonhide");
function handleMouseOverRev() {
  sideNav.style.width = "92px";
  main.style.marginLeft = "92px";
  for (const child of sideNav.children) {
    child.textContent = abbr_dict[child];
    child.style.fontWeight = 600;
  }
}
btnHide.addEventListener("mouseover", handleMouseOverRev);
