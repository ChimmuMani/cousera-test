(function(){
  'use strict';
  angular
  .module('Data')
  .component('categoriesList',{
    templateUrl:'app/component/categories/categories.template.html',
    bindings:{
      items:'<'
    }
  });
}());
