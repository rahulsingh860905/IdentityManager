define(['services'],

    function (services) {

        "use strict";

        services.factory("Logs",Logs);

        function Logs(){
            var service = {};

            service.log = log;

            function log(message){
                console.log("[LOG] "+ message);
            }

            return service;
        }
});