(function () {
  'use strict';

  var dependencies = ['ui.bootstrap', 'wizard', 'helpSidebar'];
  var app = angular.module('horizon.wizards.launch', dependencies);

  app.constant('launchWizardModalState', {
    name: 'launch-instance',
    state: {
      url: '/launch-instance',
      controller: 'LaunchWizardCtrl',
      templateUrl: 'app/components/wizards/launch/launch.tpl.html',
      windowClass: 'wizard',
      backdrop: 'static'
    }
  });

  app.controller('LaunchWizardCtrl', ['$scope', '$modalInstance',
    function ($scope, $modalInstance) {
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
  }]);
}());