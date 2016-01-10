define(['services',
        'common/services/user.service'],

        function (services) {

            "use strict";

            services.factory("AuthenticationService",AuthenticationService);

            AuthenticationService.$inject = ['$q','UserService'];

            function AuthenticationService($q, UserService){
                var service = {};

                service.authenticate = authenticate;
                //service.clearCredentials = clearCredentials;

                function authenticate(username, password){
                    var deffered = $q.defer();

                    UserService.getUserByName(username).then(function (user){
                       if(user !== null && user.password == password){
                           deffered.resolve({status:true,user:user});
                       }else{
                           deffered.resolve({status:false,user:null});
                       }
                    });

                    return deffered.promise;
                }

                /*function clearCredentials(){
                    $rootScope.globals = {};
                    $cookieStore.remove('globals');
                }*/

                return service;
            }

});

