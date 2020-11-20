(function () {
  'use strict';

  angular
    .module('Data')
    .controller('ItemsCtrl', ItemsCtrl);

  ItemsCtrl.$inject = ['items','$stateParams'];
  function ItemsCtrl(items, $stateParams) {

    var itemsList = this;
    itemsList.pageTitle = 'Details About :';
    itemsList.items = items;
    itemsList.catName = $stateParams.categoryId;

  }

}());
