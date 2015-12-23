
'use strict';

function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            abstract: false,
            url: '/',
            templateUrl: 'components/layout/home.html'
        })
        .state('login', {
            abstract: false,
            url: '/login',
            templateUrl: 'components/login/login.html'
            //controller: 'LoginController'
        })
        .state('register', {
            abstract: false,
            url: '/register',
            templateUrl: 'components/register/register.html'
            //controller: 'LoginController'
        })
}

