const endpoint = "https://flynn.boolean.careers/exercises/api/array/music";

window.addEventListener("load", addAlbum);

function addAlbum() {
  axios
    .get(endpoint)
    .then((Response) => {
      //console.log(Response);
      addAlbumFromResponse(Response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function addAlbumFromResponse(Response) {
  let album = Response.data.response;
  for (let i = 0; i <album.length; i++) {
    let img = document.getElementById('img');
    let imgUrl = album[i].poster;
    img.src = imgUrl;
    let card = document.getElementById("card");
    let titolo = document.getElementById("titolo");
    let autore = document.getElementById("autore");
    let genere = document.getElementById("genere");
    let anno = document.getElementById("anno");
    titolo.innerHTML = album[i].title;
    autore.innerHTML = album[i].author;
    genere.innerHTML = album[i].genre;
    anno.innerHTML = album[i].year;
  }
}
