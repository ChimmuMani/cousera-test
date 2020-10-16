(function(){
  'use strict';
    angular.module('myApp')
  .factory('MenuSearchService',MenuSearchService);
  MenuSearchService.$inject = ['$http', '$q', 'ApiBasePath']
  function MenuSearchService($http,$q,ApiBasePath){
    var service={
      getMatchedMenuItems:getMatchedMenuItems
    };
    return service;

/* difference between factor and service // Servicefunction InboxService($http) {
  this.getEmails = function getEmails() {
    return $http.get('/emails');
  };
}
angular
  .module('app')
  .service('InboxService', InboxService);

// Factory
function InboxService($http) {
  return {
    getEmails: function () {
      return $http.get('/emails');
    }
  };
}
angular
  .module('app')
  .factory('InboxService', InboxService);
}*/

function getMatchedMenuItems(SearchTerm){
  if(SearchTerm==''){
    return $q.when([]);
  }
  return $http.get(ApiBasePath+"/menu_items.json")
  .then(getMenuItemsComplete);// response contains data

  function getMenuItemsComplete(data){
    console.log(data.data.menu_items);
    var foundItems=data.menu_items;//menu_items look on json
    Console.log(data.data.menu.item);
    foundItems=foundItems.filter(function(item){
      return item.description.indexOf(SearchTerm)!=-1;
    });
     return foundItems || [];
  }

}
}
})();
