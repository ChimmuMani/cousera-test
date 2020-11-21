
(function () {
  'use strict';
  angular
    .module('Data')
    .controller('CategoriesCtrl', CategoriesCtrl);
 categoryController.$inject = ['categoriesList']
  function  CategoriesCtrl(categoriesList) {
    console.log("I am in Category Controller");
    var categories = this;
    categories.pageTitle = 'Category';
    categories.categoriesList = categoriesList;
  }

}());
