
(function () {
  'use strict';

  angular
    .module('Data')
    .controller('categoryController', categoryController);

 categoryController.$inject = ['categoriesList']
  function  categoryController(categoriesList) {
    console.log("I am in Category Controller");
    var categories = this;
    categories.pageTitle = 'Category';
    categories.categoriesList = categoriesList;
  }

}());
