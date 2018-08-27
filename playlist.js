window.onload = function(e) {

  // THIS SECTION POPULATES THE ALBUM COVER LIST

  var playDiv = document.querySelector('.nowPlaying')
  axios.get('https://lit-fortress-6467.herokuapp.com/object').then(function(response){


    let dataLength = response.data.results.length;
    let albGallery = document.querySelector('#album-gallery')

    for (let i=0; i<dataLength; i++) {

           let albumMini = document.createElement('img');
           albumMini.setAttribute("src" , `images/${response.data.results[i]['cover_art']}`);
           albumMini.setAttribute("id" , response.data.results[i]['id']);
           albumMini.classList.add("inlineImg");
           albGallery.appendChild(albumMini);
    };

    // THIS SECTION CREATES THE PLAY LIST

    var binArray = [];

    albGallery.addEventListener('click',  function(event){

    let myArr = response.data.results;

    myArr.forEach(function(output){

          if (output['id'] == event.target['id']){

          let playText = {};

           playText.artist = output['artist']
           playText.title = output['title']
           playDiv.innerHTML = `${playDiv.innerHTML  + playText.artist +': '+ playText.title}  <BR>`;
           binArray.push(playText.title);
          }

       });

    })
           // THIS SECTION IS TO SUBMIT THE ALBUM LIST TO THE API

              let submitAlbums = document.getElementById('submitBtn')
                submitAlbums.addEventListener('click', function(){
                  if (binArray.length) {
                    axios.post(`https://lit-fortress-6467.herokuapp.com/post`, {
                    binArray
                    }).then(function(response){

                      console.log(response);

                    });

                  } else {
                      console.log('Nothing to submit!');
                  }

              });

              // THIS SECTION IS TO CLEAR THE LIST

              let clearList = document.getElementById('clearBtn');

              clearList.addEventListener('click', function(){

                  playDiv.innerHTML = "";
                  binArray.length=0;

               });

         });

    }
