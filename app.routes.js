(function() {
  'use strict';

  angular
    .module('app')
    .config(appRoutes);

    appRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];

    function appRoutes($urlRouterProvider, $stateProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/home.html'
        });
      $urlRouterProvider.otherwise('/');
    }
})();
