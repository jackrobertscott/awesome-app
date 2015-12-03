(function() {
  'use strict';

  angular
    .module('awesomeApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('sidemenu', {
        abstract: true,
        templateUrl: 'app/main/sidemenu.html'
      })
      .state('sidemenu.main', {
        url: '/',
        templateUrl: 'app/main/main.html'
      })
      .state('sidemenu.list', {
        url: '/list',
        templateUrl: 'app/main/list.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
