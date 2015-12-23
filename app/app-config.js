'use strict';

function appConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            abstract: false,
            url: '',
            templateUrl: 'components/login/login.html'
            //controller: 'LoginController'
        })
}