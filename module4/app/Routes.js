(function(){
  'use strict';
  angular
  .module('MenuApp')
  .config(RoutesConfig);
  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider) {
    console.log("I am in router");
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'app/home.template.html'
    })
    .state('categories',{
      url:'/categories',
      templateUrl:'app/component/menuApp/category.template.html',
      controller:'CategoriesCtrl as categories',
        resolve: {
          cateList: ['MenuDataService', function (MenuDataService) {
            //console.log("menuDAta");
            return MenuDataService.getAllCategories();
          }]
        }
    })
    .state('items',{
      url: '/items/{categoryId}',
      templateUrl: 'app/component/menuApp/menu-items.template.html',
      controller: 'ItemsCtrl as itemsList',
      resolve:{
        items:['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryId);
          }]
           }
      })
  }
}());
