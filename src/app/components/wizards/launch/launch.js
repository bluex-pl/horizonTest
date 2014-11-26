(function () {
  'use strict';

  var dependencies = ['ui.bootstrap', 'wizard'];
  var app = angular.module('horizon.wizards.launch', dependencies);

  app.controller('LaunchWizardInstanceCtrl', function ($scope, $modalInstance) {
    var templatePath = 'app/components/wizards/launch/steps/';

    $scope.steps = [
      {
        label: 'Boot Source Type',
        name: 'source_type',
        templateUrl: templatePath + 'type.html',
        helpTemplateUrl: templatePath + 'type-help.html'
      },
      {
        label: 'Select Source',
        name: 'source',
        templateUrl: templatePath + 'source.html'
      },
      {
        label: 'Network',
        name: 'network',
        templateUrl: templatePath + 'net.html'
      }
    ];

    $scope.data = {};

    $scope.close = function () {
      console.log($scope.data);
      $modalInstance.close();
    };

    $scope.cancel = function () {
      console.log('Cancel');
      $modalInstance.dismiss('cancel');
    };
  });

  /*app.config(function (modalStateProvider) {
    modalStateProvider.state('home.launch-instance', {
      name: 'launch-instance',
      url: '/launch-instance',
      size: 'lg',
      backdrop: 'static',
      controller: 'LaunchWizardInstanceCtrl',
      templateUrl: 'app/components/wizards/launch/launch.tpl.html'
    });
  });*/

  app.constant('launchInstanceModalState', {
    name: 'launch-instance',
    state: {
      url: '/launch-instance',
      size: 'lg',
      backdrop: 'static',
      controller: 'LaunchWizardInstanceCtrl',
      templateUrl: 'app/components/wizards/launch/launch.tpl.html'
    }
  });
}());