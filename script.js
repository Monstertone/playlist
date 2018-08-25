

window.onload = function(e) {

  axios.get('https://lit-fortress-6467.herokuapp.com/object').then(function(response){

    console.log(response.data);
  });

};
