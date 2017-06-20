(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryDetailController', CategoryDetailController);

// 'item' is injected through state's resolve
CategoryDetailController.$inject = ['items']
function CategoryDetailController(items) {
  var CategoryDetail = this;
  CategoryDetail.items = items;
  console.log(CategoryDetail.items);
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
}

})();
