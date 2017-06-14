//angular module
var app = angular.module('myApp', []);

//main controller
app.controller('mainController', function($http){
  var vm = this;
  vm.searchGiphy = function() {
      var search = vm.searchBar;
      console.log(search);
      var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC';
      console.log('I am here in search');
      $http({
        method: 'GET',
        url: searchURL
      }).then(function(response) {
        console.log('back with:', response);
        vm.images = response.data.data;
      });
  };

  vm.randomGiphy = function(){
    var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho';
    $http({
      method: 'GET',
      url: url
    }).then(function(response) {
      console.log('back with:', response);
      vm.random = response.data.data.image_url;
    });
  };
});
