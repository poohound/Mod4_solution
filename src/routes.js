(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/Restaurant/templates/home.template.html'
  })

  // Premade list page
  .state('CatList', {
    url: '/CategoryList',
    templateUrl: 'src/Restaurant/templates/main-restaurant.template.html',
    controller: 'MenuAppController as MenuAppctrl',
    resolve: {
      Categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getCategories();
      }]
    }
  })

  .state('CategoryDetail', {
    url: '/Category/{CatId}',
    templateUrl: 'src/Restaurant/templates/item-detail.template.html',
    controller: 'CategoryDetailController as CategoryDetail',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItems($stateParams.CatId);

            }]
    }
  });
}

})();
