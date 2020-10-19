(function(){
  'use strict';
angular.module('myApp')
  .directive('foundItems',foundItems);
  function foundItems(){
  console.log("helloooo freom foundItems");
    var ddo={
      templateUrl:'app/foundItems/found-items.html',
      scope:{
        items:'<',
        message:'<',
        onRemove:'&'
      }
    };
    return ddo;
  }
})();
