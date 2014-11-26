(function () {
  'use strict';

  var app = angular.module('horizon');
  app.config(function ($stateProvider, $urlRouterProvider) {
    var parent = 'network';
    var templateUrl = 'partials/network/';

    $stateProvider
      .state(parent, {
        abstract: true,
        parent: 'wizard',
        url: '/net',
        templateUrl: templateUrl + 'index.html'
      })
      .state('name', {
        parent: parent,
        url: '/introduction',
        templateUrl: templateUrl + 'name.html'
      });
  });
}());