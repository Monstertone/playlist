window.onload = function(e) {

  axios.get('https://lit-fortress-6467.herokuapp.com/object').then(function(response){

    console.log(response.data.results[0]['cover_art']);

    console.log(response.data.results.length);
    let dataLength = response.data.results.length;
    let albGallery = document.querySelector('#album-gallery')
    for (let i=0; i<dataLength; i++) {

           let albumMini = document.createElement('img');
           albumMini.setAttribute("src" , `images/${response.data.results[i]['cover_art']}`);

           albumMini.classList.add("inlineImg")
           // albumMini.classList.add("inlineImg:hover")

           albGallery.appendChild(albumMini);

    }


});

}
