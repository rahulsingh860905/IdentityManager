'use strict';

var applicationModule = angular.module('ApplicationModule', [ 'ui.router']);

// CONTROLLERS
applicationModule.controller('ApplicationController', ['$state', '$scope', appController]);

// ROUTING
applicationModule.config(['$stateProvider', '$urlRouterProvider', appConfig]);