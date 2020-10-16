(function(){
  'use strict';
    angular.module('myApp')
  .factory('MenuSearchService',MenuSearchService);
  MenuSearchService.$inject = ['$http', '$q', 'ApiBasePath']
  function MenuSearchService($http, $q, ApiBasePath) {
    var service = {
      getMatchedMenuItems: getMatchedMenuItems
    };
    return service;
    console.log("hellooo");
    function getMatchedMenuItems(SearchTerm){
      if(SearchTerm==''){
        return $q.when([]);
      }
      return $http.get(APIBasePath+"/menu_items.json")
      .then(getMenuItemsComplete);// response contains data

      function getMenuItemsComplete(data){
        var foundItems=data.data.menu_items;//menu_items look on json
        foundItems=foundItems.filter(function(item){
          return item.description.indexOf(SearchTerm)!==-1;
        });
         return foundItems || [];
      }

    }
    }
    })();

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