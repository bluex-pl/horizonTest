(function () {
  'use strict';

  var dependencies = [];
  var app = angular.module('helpSidebar', dependencies);

  app.directive('hzHelpSidebar', function () {
    return {
      transclude: true,
      replace: true,
      controller: 'HelpSidebarCtrl',
      templateUrl: 'app/shared/helpSidebar/helpSidebar.tpl.html'
    };
  });

  app.controller('HelpSidebarCtrl', ['$scope', function ($scope) {
    $scope.helpVisible = false;

    $scope.toggleHelp = function () {
      $scope.helpVisible = !$scope.helpVisible;
    };
  }]);

}());