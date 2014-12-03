(function () {
  'use strict';

  var dependencies = ['ui.router', 'ui.bootstrap'];
  var app = angular.module('modalState', dependencies);

  app.provider('modalState', ['$stateProvider', function ($stateProvider) {
    var provider = this;

    this.$get = function () {
      return provider;
    };

    this.state = function (stateName, options) {
      var modalInstance;

      $stateProvider.state(stateName, {
        url: options.url,
        onEnter: ['$modal', '$state', function ($modal, $state) {
          modalInstance = $modal.open(options);
          modalInstance.result['finally'](function () {
            modalInstance = null;
            if ($state.$current.name === stateName) {
              $state.go('^');
            }
          });
        }],
        onExit: [function () {
          if (modalInstance) {
            modalInstance.close();
          }
        }]
      });
      return provider;
    };
  }]);

}());