(function(){
  'use strict';
  angular
  .module('MenuApp')
  .config(RoutesConfig);
  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'app/home.template.html'
    })
    .state('categories',{
      url:'/categories',
      templateUrl:'app/component/menuApp/category.template.html',
      controller:'categoryController as Cat_Ctrl',
      resolve:{
        categoriesList:['MenuDataService',function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items',{
      url: '/items/{categoryId}',
      templateUrl: 'app/component/menuApp/menuapp-items.template.html',
      controller: 'ItemsCtrl as itemsList',
      resolve:{
        items:['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryId);
          }]
           }
      })
  }
}());