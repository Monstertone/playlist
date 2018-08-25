

window.onload = function(e) {

  axios.get('https://lit-fortress-6467.herokuapp.com/object').then(function(response){

    console.log(response.data.results[0]['cover_art']);

  // GENERATING 3 UNIQUE NUMBERS FOR ALBUM DISPLAY

    let randomId = [];
   //  let arrLength = randomId.length;
  while (randomId.length < 3){
    let x = Math.floor(Math.random() * 5)
    if (!randomId.length) {
      randomId.push(x);
    } else if (x !== randomId[(randomId.length - 1)] && x !== randomId[(randomId.length - 2)]) {
    randomId.push(x);
    }
  }

  console.log(randomId);


  });

};
