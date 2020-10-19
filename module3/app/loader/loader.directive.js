(function(){
  'use strict',
  angular.module('myApp')
  .directive('loader',loader);
  cosole.log("Loader  says hello");
  function loader(){
    var ddo={
      templateUrl:"app/loader/loader.template.html"
    };
    return ddo;
    }
})();
