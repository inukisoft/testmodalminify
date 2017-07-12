angular.module('comun', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('comun').config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'comun/partial/home/home.html'
    });
    /* Add New States Above */

});

