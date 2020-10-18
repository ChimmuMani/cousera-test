(function(){
  'use strict',
  angular.module('myApp')
  .directive('loader',loader);
  function loader(){
    var ddo={
      templateUrl:"app/loader/loader.template.html"
    };
    return ddo;
  }
})();
