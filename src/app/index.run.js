(function() {
  'use strict';

  angular
    .module('awesomeApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
