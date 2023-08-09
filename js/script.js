const btn = document.querySelector("#view-playlist");

const infs = document.querySelectorAll(".info");
const nav = document.querySelector("nav");
const ContainerShadow = document.querySelector(".C-shadow-2");
// const ContainerShadow = document.querySelector(".C-shadow");

ContainerShadow.style.visibility = "hidden";

function mudarPag() {
  nav.classList.add("desaparecer");
  infs.forEach((e) => {
    e.classList.add("desaparecer");
  });

  ContainerShadow.style.visibility = "visible";
  ContainerShadow.classList.add("preencher");

  setTimeout(() => {
    window.location.replace("./musics.html");
  }, 1200);
}
