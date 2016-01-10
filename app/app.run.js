define(['app',
        'common/services/logging.service'],

    function (app) {

    "use strict";

    ApplicationRun.$inject = ["$state", "$rootScope", "$location", "$cookieStore", "$http", "Logs"];

    function ApplicationRun($state, $rootScope, $location, $cookieStore, $http, Logs) {
        // keep employee logged in after page refresh
        Logs.log("Application Intialized..");

        $rootScope.globals = $cookieStore.get("globals") || {loginStatus:false,loggedInUser:null};

        $rootScope.$on("$locationChangeStart", function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            $location.path() != ""?Logs.log("Location change start to " + $location.path()):"";
            var restrictedPage = $.inArray($location.path(), ["/login", "/register"]) === -1;
            var loggedIn = $rootScope.globals.loginStatus;
            if (restrictedPage && !loggedIn) {
                $location.path("/login");
                Logs.log("No LoggedIn user..");
                Logs.log("Redirecting to login..");
            }else if($location.path() == "/login" && loggedIn){
                $location.path("/home");
                Logs.log("User already logged in");
                Logs.log("Redirecting to home..");
            }
        });

        $rootScope.$on("$locationChangeSuccess", function () {
            Logs.log("Location is " + $location.path());
        });
    }

    app.run(ApplicationRun);

});

