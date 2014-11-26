(function () {
  'use strict';

  var dependencies = ['ui.bootstrap', 'ui.router'];
  var app = angular.module('wizard', dependencies);

  app.directive('hzWizard', function () {
    return {
      scope: {
        steps: '=',
        title: '@?',
        finish: '@?',
        close: '&?',
        cancel: '&?'
      },
      controller: 'WizardInstanceCtrl',
      templateUrl: 'app/shared/wizard/wizard.tpl.html'
    };
  });

  app.directive('hzWizardStep', function () {
    return {
      require: '^hzWizard',
      scope: {
        name: '=',
        correct: '@'
      },
      controller: 'WizardInstanceCtrl',
      templateUrl: 'app/shared/wizard/wizard.tpl.html'
    };
  });

  app.controller('WizardInstanceCtrl', function ($scope) {
    var currentStep = 0;
    var stepMap = {};

    angular.forEach($scope.steps, function(step, index) {
      this[step.name] = index;
    }, stepMap);

    $scope.isFirstStep = true;
    $scope.isLastStep = false;
    $scope.helpVisible = false;

    function setCurrentStep(index) {
      currentStep = index;
      $scope.isFirstStep = currentStep === 0;
      $scope.isLastStep = currentStep === $scope.steps.length - 1;
    }

    $scope.currentStep = function () {
      return $scope.steps[currentStep];
    };

    $scope.goToStep = function (stepName) {
      setCurrentStep(stepMap[stepName]);
    };

    $scope.nextStep = function () {
      setCurrentStep(Math.min(currentStep + 1, $scope.steps.length - 1));
    };

    $scope.prevStep = function () {
      setCurrentStep(Math.max(currentStep - 1, 0));
    };

    $scope.toggleHelp = function () {
      $scope.helpVisible = !$scope.helpVisible;
    };
  });

}());