(function () {
  'use strict';

  var dependencies = [
    'horizon.wizards.launch',
  ];
  var app = angular.module('horizon.wizards', dependencies);

  app.config(function ($stateProvider) {
    $stateProvider.state('wizard', {
      abstract: true,
      url: '/wizard',
      views: {
        'wizard': {
          template: '<ui-view/>'
        }
      }
    });
  });

}());