define(['app',
        'components/login/login.controller'],

    function (app,LoginController) {

    ApplicationConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

    function ApplicationConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: 'components/layout/home.html'
            })
            .state("register", {
                url: "/register",
                templateUrl: "components/register/register.html"
                //controller: "RegisterController"
            })
            .state("about", {
                url: "/about",
                templateUrl: "components/about/about.html"
            })
            .state("login", {
                url: "/login",
                templateUrl: "components/login/login.html",
                controller: "LoginController",
                controllerAs: 'vm'
            })

        console.log("Config Block");
    }

    app.config(ApplicationConfig);
});

