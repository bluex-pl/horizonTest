(function () {
  'use strict';

  var dependencies = ['ui.bootstrap', 'wizard', 'helpSidebar'];
  var app = angular.module('horizon.wizards.launch', dependencies);

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

  app.controller('LaunchWizardInstanceCtrl', function ($scope, $modalInstance) {
    $scope.templatePath = 'app/components/wizards/launch/steps/';
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
}());