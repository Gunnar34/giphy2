//angular module
var app = angular.module('myApp', []);

//main controller
app.controller('mainController', function( gifService ){
  var vm = this;

  vm.randomGiphy = function(){
      gifService.randomGif().then(function(data){
        vm.random = data;
  });
};


  vm.searchGiphy = function(){
    var search = vm.searchBar;
    gifService.searchGif(search).then(function(data){
      vm.images = data;
    });
    vm.searchBar = '';
  };

});
