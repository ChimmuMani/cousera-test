(function(){
  'use strict';
angular.module('myApp')
  .directive('foundItems',foundItems);
    console.log("helloooo freom foundItemsout");
  function foundItems(){
  console.log("helloooo freom foundItems");
    var ddo={
      templateUrl:'app/found-items/found-items.html',
      scope:{
        items:'<',
        message:'<',
        onRemove:'&'
      }
    };
    return ddo;
  }
})();
