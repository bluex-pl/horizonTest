(function () {
  'use strict';

  var dependencies = [
    'ui.router',
    'ui.bootstrap',
    'modalState',
    'horizon.wizards.launch'
  ];
  var app = angular.module('horizon.home', dependencies);

  app.config(['$stateProvider', 'modalStateProvider', 'launchWizardModalState',
    function ($stateProvider, modalStateProvider, launchWizardModalState) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        'main': {
          controller: 'HomeCtrl',
          templateUrl: 'app/components/home/home.tpl.html' //TODO: compile and put home/test.tpl.html
        }
      },
      data: {
        pageTitle: 'Home'
      }
    });
    modalStateProvider.state('home.' + launchWizardModalState.name,
      launchWizardModalState.state
    );
  }]);

  app.controller('HomeCtrl', ['$scope', function ($scope) {

  }]);

}());