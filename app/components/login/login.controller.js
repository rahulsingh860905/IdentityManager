define(['controllers',
        'common/services/authentication.service'],

    function (controllers) {

        "use strict";

        controllers.controller("LoginController",LoginController);

        LoginController.$inject = ['$rootScope','$location', "$cookieStore",'AuthenticationService'];

        function LoginController($rootScope, $location, $cookieStore, AuthenticationService){
            var vm = this;

            vm.login = login;

            function login(){
                vm.loginError = false;
                AuthenticationService.authenticate(vm.username,vm.password).then(function (loginVO){
                    $rootScope.globals.loginStatus = loginVO.status;
                    if($rootScope.globals.loginStatus){
                        $rootScope.globals.loggedInUser = loginVO.user;
                        $cookieStore.put('globals', $rootScope.globals);
                        $location.path('/home');
                    }else{
                        vm.loginError = true;
                    }
                });
            }
        }

    });