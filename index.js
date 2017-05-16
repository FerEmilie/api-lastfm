
  $.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=bob+marley&api_key=2618a0c146dcebcbccec4e82e4cf6209&format=json')
    
        .then(function (data) {

          // Affiche mes données
          console.log(data);

          $('#wrapper').html(data.artist.bio.content);

        });
