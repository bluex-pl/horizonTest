(function () {
  'use strict';

  var dependencies = [
    'horizon.home',
    'horizon.test',
    'ui.bootstrap',
    'ui.router'
  ];
  var app = angular.module('horizon', dependencies);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  });

  app.run(function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });

  app.controller('AppCtrl', function ($scope, $location) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
      var title = 'Horizon';
      if(toState.data && toState.data.pageTitle) {
        $scope.pageTitle = toState.data.pageTitle + ' | ' + title ;
      }
      else {
        $scope.pageTitle  = title;
      }
    });
  });

}());