const btn = document.querySelector("#view-playlist");

const infs = document.querySelectorAll(".inf");
const nav = document.querySelector("nav");
const ContainerShadow = document.querySelector(".C-shadow");

function mudarPag() {
  nav.classList.add("desaparecer");
  infs.forEach((e) => {
    e.classList.add("desaparecer");
  });

  ContainerShadow.classList.add("preencher");
  setTimeout(() => {
    window.location.replace("./musics.html");
  }, 1200);
}
