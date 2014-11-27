(function () {
  'use strict';

  var app = angular.module('wizard');

  app.directive('hzWizardStep', function () {
    return {
      require: '^hzWizard',
      transclude: true,
      replace: true,
      scope: {
        name: '@',
        label: '@',
        valid: '&?'
      },
      controller: 'WizardStepCtrl',
      templateUrl: 'app/shared/wizard/wizardStep.tpl.html',
      link: function (scope, element, attrs, wizardCtrl) {
        wizardCtrl.registerStep(scope);
      }
    };
  });

  app.controller('WizardStepCtrl', function ($scope) {
    $scope.ID = undefined;
    $scope.valid = $scope.valid || true;
    $scope.currentStep = false;
    $scope.goToStep = undefined;
  });

}());
