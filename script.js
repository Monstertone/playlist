


window.onload = function(e) {

  axios.get('https://lit-fortress-6467.herokuapp.com/object').then(function(response){

    console.log(response.data.results[0]['cover_art']);

  // // GENERATING 3 UNIQUE NUMBERS FOR ALBUM DISPLAY

  let randomId = []; // array for random index of the returned data
  let arrLength = randomId.length;

  while (randomId.length < 3){
          let x = Math.floor(Math.random() * 5)
          if (!randomId.length) {
            randomId.push(x);
          } else if (x !== randomId[(randomId.length - 1)] && x !== randomId[(randomId.length - 2)]) {
          randomId.push(x);
          }
  }
  // CREATE IMG TAGS AND INSERT ON PAGE
      // debugger;
     var albumDiv = document.querySelector('.album_container')
     for (let i = 0; i < 3; i++) {
     let albumImg = document.createElement('img');
      albumImg.setAttribute("src" , `images/${response.data.results[(randomId[i])]['cover_art']}`);
      albumDiv.appendChild(albumImg);
      console.log(albumImg);
      console.log(`images/${response.data.results[(randomId[i])]['cover_art']}`)
 }
  console.log(randomId);


  });

};
