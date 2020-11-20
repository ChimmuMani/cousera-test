(function(){}(
  'use strict';
  angular
  .module('MenuApp')
  .service('MenuDataService',MenuDataService);
  MenuDataService.$inject=['$http', 'ApiBasePath'];
  function MenuDataService($http,ApiBasePath){
    var menudataSer=this;
    // getAllCategories :: this method should return a promise
    // which is a result of using the $http service,
    // REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
    menudataSer.getAllCategories=function(){
      return $http({
        method: 'GET',
        url:ApiBasePath+'/categories.json';
      }).then(function(result){
        return result.data;
      })
    };
    // getItemsForCategory(categoryShortName)
    // this method should return a promise which is a result of using the $http service
    // REST API endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=,
    // before the call to the server, your code should append whatever categoryShortName value was passed in as an argument into the getItemsForCategory method.
    menudataSer.getItemsForCategory=function(categoryShortName){
      return $http({
        method: 'GET',
        url:ApiBasePath+'menu_items.json',
        params: {
          category: categoryShortName
        }
      }).then(function(result){
        return result.data.menu_items;
      })
    };

  }
));
