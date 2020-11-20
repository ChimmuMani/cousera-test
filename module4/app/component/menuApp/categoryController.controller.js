
(function () {
  'use strict';

  angular
    .module('Data')
    .controller('categoryController', categoryController);

 categoryController.$inject = ['categoriesList']
  function  categoryController(categoriesList) {
    var categories = this;
    categories.pageTitle = 'Category';
    categories.categoriesList = categoriesList;
  }

}());
