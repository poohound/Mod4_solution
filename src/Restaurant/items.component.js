(function () {
'use strict';

angular.module('MenuApp')
.component('Items', {
  templateUrl: 'src/Restaurant/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();