export default function(ngModule, options){

  ngModule.run(registerErrorHandler);

  /**
   * Register error handler for ui-router state change errors
   *
   * This catches errors that are thrown while the state is changing e.g. during resource resolution.
   */
  function registerErrorHandler($rootScope) {

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

      // ADD CUSTOM LOGIC HERE
      // event.preventDefault();
    });

  }

  // Inject dependencies;
  registerErrorHandler.$inject = ['$rootScope'];

};

