define(['services'],

    function (services) {

        "use strict";

        services.factory("UserService",UserService);

        UserService.$inject = ['$q','$filter', '$http'];

        function UserService($q, $filter, $http){
            var service = {};

            service.getAllUsers = getAllUsers;
            service.getUserByName = getUserByName;
            service.createUser = createUser;
            service.updateUser = updateUser;
            service.deleteUser = deleteUser;

            return service;

            function getAllUsers(){
                var deferred = $q.defer();

                $http.get("data/user.json")
                    .then(function(response) {
                        deferred.resolve(response.data.users);
                    });

                return deferred.promise;
            }

            function getUserByName(name){
                var deferred = $q.defer();

                getAllUsers().then(function (users){
                    var filtered = $filter('filter')(users, { name: name });
                    var user = filtered.length ? filtered[0] : null;
                    deferred.resolve(user);
                });

                return deferred.promise;
            }

            function createUser(name, password, role){

            }

            function updateUser(name, password, role){

            }

            function deleteUser(name){

            }
        }

});

