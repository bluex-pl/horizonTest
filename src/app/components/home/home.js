(function () {
  'use strict';

  var dependencies = [
    'ui.router',
    'ui.bootstrap',
    'modalState',
    'horizon.wizards.launch'
  ];
  var app = angular.module('horizon.home', dependencies);

  app.config(function ($stateProvider, modalStateProvider, launchInstanceModalState) {
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
    modalStateProvider.state('home.' + launchInstanceModalState.name,
      launchInstanceModalState.state
    );
  });

  app.controller('HomeCtrl', function ($scope) {

  });

}());