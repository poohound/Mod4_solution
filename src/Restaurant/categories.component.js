(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/Restaurant/templates/category.template.html',
  bindings: {
    categories: '<'
  }
});

})();