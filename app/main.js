require.config({
    paths: {
        angular: 'bower_components/angular/angular',
        jquery: 'bower_components/jquery/dist/jquery.min',
        uiRouter: 'bower_components/angular-ui-router/release/angular-ui-router.min',
        ngCookies: 'bower_components/angular-cookies/angular-cookies.min',
        domReady: 'bower_components/domReady/domReady',
        underscore:'bower_components/underscore/underscore-min'
    },
    shim: {
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        uiRouter: {
            deps: ['angular']
        },
        ngCookies: {
            deps: ['angular']
        }
    }
});

require([
        'angular',
        'domReady',
        'app',
        'app.config',
        'app.run'
    ],
    function (angular, domReady) {
        'use strict';

        domReady(function () {
            console.log("Ready Block");
            angular.bootstrap(document, ['AppModule']);

            // The following is required if you want AngularJS Scenario tests to work
            $('html').addClass('ng-app: AppModule');
        });
    }
);
