angular.module('testmodal', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'comun']);

angular.module('testmodal').config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');


});

angular.module('testmodal').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

