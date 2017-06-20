(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuAppController', MenuAppController);


MenuAppController.$inject = ['Categories'];
function MenuAppController(Categories) {
  var MenuAppctrl = this;
  MenuAppctrl.categories = Categories;
  console.log(MenuAppctrl.categories);
}

})();
