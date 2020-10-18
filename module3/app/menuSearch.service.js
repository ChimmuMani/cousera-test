(function() {
  'use strict';

  angular.module('NarrowItDownApp')
    .factory('MenuSearchService', MenuSearchService);

  MenuSearchService.$inject = ['$http', '$q', 'ApiBasePath']
  function MenuSearchService($http, $q, ApiBasePath) {
    var service = {
      getMatchedMenuItems: getMatchedMenuItems
    };

    return service;

    ////////////

    function getMatchedMenuItems(searchTerm) {

      if (searchTerm == '') {
       return $q.when([]);
      }

      return $http.get(ApiBasePath + "/menu_items.json")
        .then(getMenuItemsComplete);

      function getMenuItemsComplete(data) {
        var foundItems = data.menu_items;

        foundItems = foundItems.filter(function(item) {
          return item.description.indexOf(searchTerm) !== -1;
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
