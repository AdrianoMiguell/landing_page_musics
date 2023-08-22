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
      view_albums(data);
    } catch (error) {
      console.error(error);
    }
  });
};

let view_musics = async (data) => {
  for (let d = 0; d < 7; d++) {
    let div = document.createElement("div");
    div.setAttribute("class", "four-musics");
    div_musics.appendChild(div);

    let div_four_music = document.querySelectorAll(".four-musics");

    for (let m = d * 4; m < d * 4 + 4; m++) {
      if (data[m].link != undefined) {
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

        if (data[m + 1].link == undefined) {
          div_four_music[d].classList.add("last_music");
        }
      }
    }
  }
};

let view_albums = async (data) => {
  let order = [];

  const albums = document.querySelector(".albums");

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i].album != data[i + 1].album) {
      order.push(i);
    }
  }

  for (let a = 0; a < order.length; a++) {
    let album = document.createElement("div");
    album.setAttribute("class", "album");
    albums.appendChild(album);

    let div_album = document.querySelectorAll(".album");
    div_album[a].innerHTML = `<img src="./img/musics-albums/${
      data[order[a]].img
    }" alt="capa do album ${data[order[a]].album}" />`;

    div_album[a].innerHTML += `<div class="desc_album">
      <span class="name_album"> ${data[order[a]].album} </span>
      <span class="autor"> Álbum | ${data[order[a]].autor} </span>
    </div>`;
  }
};

start();
