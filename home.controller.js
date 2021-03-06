(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$location', '$anchorScroll'];

      function HomeController($anchorScroll, $location, $scope) {
        var vm = this;

        vm.scrollTo = scrollTo;
        vm.imagePath = '/assets/brickbreaker_pic.png';

        function scrollTo(id) {
          var old = $location.hash();
          $location.hash(id);
          $anchorScroll();
          $location.hash(old);
        }
      }
})();
