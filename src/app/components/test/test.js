(function () {
  'use strict';

  var dependencies = [
    'ui.router',
    'ui.bootstrap',
    'modalState',
    'horizon.wizards.launch'
  ];
  var app = angular.module('horizon.test', dependencies);

  app.config(function ($stateProvider, modalStateProvider, launchInstanceModalState) {
    $stateProvider.state('test', {
      url: '/test',
      views: {
        'main': {
          controller: 'TestCtrl',
          templateUrl: 'app/components/test/test.tpl.html' //TODO: compile and put home/test.tpl.html
        }
      },
      data: {
        pageTitle: 'Test'
      }
    });
    modalStateProvider.state('test.' + launchInstanceModalState.name,
      launchInstanceModalState.state
    );
  });

  app.controller('TestCtrl', function ($scope) {

  });

}());