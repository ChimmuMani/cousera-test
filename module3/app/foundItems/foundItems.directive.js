(function(){
  'use strict';
    angular.module('myApp')
  .directive('foundItems',foundItems);
  function foundItems(){
    var ddo={
      templateUrl:'app/foundItems/foundItems.html',
      scope:{
        items:'<',
        message:'<',
        onRemove:'&'
      }
    };
    return ddo;
  }
})();
