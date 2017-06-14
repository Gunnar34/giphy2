app.service('gifService', function($http){

    this.randomGif = function(){
      var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho';
      return $http({
        method: 'GET',
        url: url
      }).then(function(response) {
        console.log('back with:', response);
        return response.data.data.image_url;
      });
    };

    this.searchGif = function(search) {
        console.log(search);
        var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC';
        console.log('I am here in search');
         return $http({
          method: 'GET',
          url: searchURL
        }).then(function(response) {
          console.log('back with:', response);
          return response.data.data;
        });
    };

});
