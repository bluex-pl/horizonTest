(function () {
  'use strict';

  var app = angular.module('wizard');

  app.directive('hzWizardStep', function () {
    return {
      require: '^hzWizard',
      transclude: true,
      replace: true,
      scope: {
        label: '@'
      },
      controller: 'WizardStepCtrl',
      templateUrl: 'app/shared/wizard/wizardStep.tpl.html',
      link: function (scope, element, attrs, wizardCtrl) {
        wizardCtrl.registerStep(scope);
      }
    };
  });

  app.controller('WizardStepCtrl', ['$scope', function ($scope) {
    // Initialized by WizardCtrl.registerStep
    // Available to read by children's controllers
    $scope.ID = undefined;
    $scope.currentStep = false;
  }]);

}());
