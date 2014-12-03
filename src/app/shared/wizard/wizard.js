(function () {
  'use strict';

  var dependencies = ['ui.bootstrap'];
  var app = angular.module('wizard', dependencies);

  app.constant('wizardModalState', {
    state: {
      size: 'lg',
      backdrop: 'static',
      windowClass: 'wizard'
    }
  });

  app.directive('hzWizard', function () {
    return {
      transclude: true,
      replace: true,
      scope: {
        title: '@?',  // optional string - Wizard title
        finish: '@?', // optional string - Text on finish button
        close: '&?',  // optional expression - executed when finish button pressed
        cancel: '&?'  // optional expression - executed when cancel button pressed
        // TODO: controler injects, validation
      },
      controller: 'WizardCtrl',
      templateUrl: 'app/shared/wizard/wizard.tpl.html'
    };
  });

  app.controller('WizardCtrl', ['$scope', function ($scope) {
    var currentStep = 0;

    $scope.steps = [];
    $scope.isFirstStep = true;
    $scope.isLastStep = false;

    this.registerStep = function (stepScope) {
      var transcludedScope = stepScope.$$nextSibling;
      if($scope.steps.length === 0) {
        stepScope.currentStep = true;
      }
      stepScope.ID = $scope.steps.length;
      transcludedScope.goToStep = $scope.goToStep;
      $scope.steps.push(stepScope);
    };

    $scope.goToStep = function (ID) {
      $scope.steps[currentStep].currentStep = false;
      $scope.steps[ID].currentStep = true;
      currentStep = ID;
      $scope.isFirstStep = currentStep === 0;
      $scope.isLastStep = currentStep === $scope.steps.length - 1;
    };

    $scope.currentStep = function () {
      return $scope.steps[currentStep];
    };

    $scope.nextStep = function () {
      $scope.goToStep(Math.min(currentStep + 1, $scope.steps.length - 1));
    };

    $scope.prevStep = function () {
      $scope.goToStep(Math.max(currentStep - 1, 0));
    };

  }]);
}());