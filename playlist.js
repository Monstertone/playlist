window.onload = function(e) {
  var playDiv = document.querySelector('.nowPlaying')
  axios.get('https://lit-fortress-6467.herokuapp.com/object').then(function(response){

    console.log(response.data);


    // console.log(response.data.results[0]['cover_art']);

    // console.log(response.data.results.length);
    let dataLength = response.data.results.length;
    let albGallery = document.querySelector('#album-gallery')

    for (let i=0; i<dataLength; i++) {

           let albumMini = document.createElement('img');
           albumMini.setAttribute("src" , `images/${response.data.results[i]['cover_art']}`);
           albumMini.setAttribute("id" , response.data.results[i]['id']);
           albumMini.classList.add("inlineImg");
           albGallery.appendChild(albumMini);
    }



    albGallery.addEventListener('click',  function(event){

    let myArr = response.data.results;

    myArr.forEach(function(output){
       // let playDiv = document.querySelector('.nowPlaying')
          if (output['id'] == event.target['id']){
          // console.log(output['artist'] + ': '+ output['title']);
          let playText = {};
          // playText = output['artist'] + ': '+ output['title']
          // playText = output['artist'] output['title']
           playText.artist = output['artist']
           playText.title = output['title']
          // playDiv.innerHTML = playDiv.innerHTML  + `<p> ${playText}`;
          playDiv.innerHTML = `${playDiv.innerHTML  + playText.artist +': '+ playText.title}  <BR>`;

          }

       });

    })


   });

   let clearList = document.getElementById('clearBtn');
   clearList.addEventListener('click', function(){
   playDiv.innerHTML = "";
 });


}
