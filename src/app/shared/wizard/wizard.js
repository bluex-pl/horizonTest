(function () {
  'use strict';

  var dependencies = ['ui.bootstrap', 'ui.router'];
  var app = angular.module('wizard', dependencies);

  app.directive('hzWizard', function () {
    return {
      transclude: true,
      replace: true,
      scope: {
        title: '@?',
        finish: '@?',
        close: '&?',
        cancel: '&?'
      },
      controller: 'WizardCtrl',
      templateUrl: 'app/shared/wizard/wizard.tpl.html'
    };
  });

  app.controller('WizardCtrl', function ($scope) {
    var currentStep = 0;
    var stepMap = {};

    $scope.steps = [];
    $scope.isFirstStep = true;
    $scope.isLastStep = false;
    $scope.helpVisible = false;

    this.registerStep = function (step) {
      if($scope.steps.length === 0) {
        step.currentStep = true;
      }
      step.ID = $scope.steps.length;
      step.goToStep = $scope.goToStep;
      stepMap[step.name] = step.ID;
      $scope.steps.push(step);
    };

    $scope.goToStepID = function (index) {
      $scope.steps[currentStep].currentStep = false;
      $scope.steps[index].currentStep = true;
      currentStep = index;
      $scope.isFirstStep = currentStep === 0;
      $scope.isLastStep = currentStep === $scope.steps.length - 1;
    };

    $scope.currentStep = function () {
      return $scope.steps[currentStep];
    };

    $scope.goToStep = function (stepName) {
      goToStepID(stepMap[stepName]);
    };

    $scope.nextStep = function () {
      goToStepID(Math.min(currentStep + 1, $scope.steps.length - 1));
    };

    $scope.prevStep = function () {
      goToStepID(Math.max(currentStep - 1, 0));
    };

    $scope.toggleHelp = function () {
      $scope.helpVisible = !$scope.helpVisible;
    };
  });

}());