const sec_musics = document.querySelector(".sec-musics");
const div_musics = document.querySelector(".musics");

let start = async () => {
  console.log("Start");
  get_data();
};

let get_data = async () => {
  let response = await fetch("./js/data.json");
  let data = response.json();

  data.then((data) => {
    try {
      console.log(data);
      view_musics(data);
    } catch (error) {
      console.error(error);
    }
  });
};

let view_musics = async (data) => {

  for (let d = 0; d < 5; d++) {
    let div = document.createElement("div");
    div.setAttribute("class", "four-musics");
    div_musics.appendChild(div);

    let div_four_music = document.querySelectorAll(".four-musics");

    for (let m = d * 4; m < d * 4 + 4; m++) {
      let div = document.createElement("a");
      div.setAttribute("class", "music");
      div.setAttribute("href", `${data[m].link}`);
      div.setAttribute("target", "_black");
      div_four_music[d].appendChild(div);

      let div_music = document.querySelectorAll(".music");

      console.log(` d - ${d} ; m - ${m} - realidade: ${m}`);
      let div_image = document.createElement("div");
      div_image.setAttribute("class", "image");
      div_image.innerHTML = `<img src="./img/musics-albums/${data[m].img}" alt="capa da música ${data[m].music}" />`;
      div_music[m].appendChild(div_image);

      let div_informs = document.createElement("div");
      div_informs.setAttribute("class", "informs");
      div_informs.innerHTML = `
        <span class="title-music"> ${data[m].music} </span>
        <span class="album-music"> ${data[m].album} - ${data[m].autor} </span>
      `;
      div_music[m].appendChild(div_informs);
    }
  }
};

start();