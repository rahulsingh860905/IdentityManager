'use strict';

var applicationModule = angular.module('ApplicationModule', [ 'ui.router','ngCookies']);

// CONTROLLERS
applicationModule.controller('ApplicationController', ['$state', '$scope', appController]);

// ROUTING
applicationModule.config(['$stateProvider', '$urlRouterProvider', appConfig]);

//RUN
applicationModule.run(['$state','$rootScope', '$location', '$cookieStore', '$http', appRun]);




