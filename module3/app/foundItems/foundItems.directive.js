(function(){
  'use strict';
    var myApp =angular.module('myApp')
  .directive('foundItems',foundItems);
  function foundItems(){
    console.log("helloooo");
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
