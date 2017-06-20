(function () {
'use strict';

angular.module('MenuData')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  var categories = [];
  var items = [];
  // List of shopping items

  // Pre-populate a no cookie list
  service.getCategories = function(){
    categories = [];
    $http({url: ("https://davids-restaurant.herokuapp.com/categories.json")})
    .then(function (response){
      for ( var i = 0; i < response.data.length -1; i++){
        categories.push( response.data[i]);
      }
    }).catch(function(error){
      console.log("Error while retriving data" + error);
    });
    return categories;
  };

  service.getCatName = function (Index){
    if (categories.length == 0){
      console.log('calling get categories');
      service.getCategories();
    }
    var catName = categories[Index].short_name;
    return catName;
  }
  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function (CategoryName) {
    console.log(CategoryName);
    items = [];
    $http({url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + CategoryName)})
    .then(function (response){
      for (var i = 0; i < response.data.menu_items.length -1; i++){
        items.push( response.data.menu_items[i]);
      }
    }).catch(function(error){
      console.log("Crap not this again!!");
    });
    return items;
  };
}

})();
