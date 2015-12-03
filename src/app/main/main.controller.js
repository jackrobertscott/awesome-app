(function() {
  'use strict';

  angular
    .module('awesomeApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.items = [{
      name: 'Fred'
    }, {
      name: 'Bob'
    }, {
      name: 'Ben'
    }];

    activate();

    function activate() {
      // initialization code...
    }
  }
})();
