const main = document.querySelector(".main");

const sideNav = document.querySelector(".sidenav");
//const sideNavA1 = document.querySelector(".sidenav a1");
//const sideNavA2 = document.querySelector(".sidenav a2");
//const sideNavAext = document.querySelector(".sidenav aext");

sideNav.style.display = "none";
main.style.marginLeft = "0px";

const btn = document.querySelector("button");

function handleMouseOver() {
  sideNav.style.display = "true";
  main.style.marginLeft = "222px";
}

btn.addEventListener("mouseover", handleMouseOver);
