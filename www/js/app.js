(function () {
  'use strict';

  // Ionic Starter App

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  angular
    .module("starter", ["ionic"])

    .run(function ($ionicPlatform, $rootScope, $http, $location, $window) {
      $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs).
        // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
        // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
        // useful especially with forms, though we would prefer giving the user a little more room
        // to interact with the app.
        if (window.cordova && window.Keyboard) {
          window.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
          // Set the statusbar to use the default style, tweak this to
          // remove the status bar on iOS or change it to use white instead of dark colors.
          StatusBar.styleDefault();
        }
      });

      // keep user logged in after page refresh
      if ($window.localStorage.currentUser) {
        $http.defaults.headers.common.Authorization =
          "Bearer " + $window.localStorage.currentUser.token;
      }

      // redirect to login page if not logged in and trying to access a restricted page
      $rootScope.$on("$locationChangeStart", function (event, next, current) {
        var publicPages = ["/login"];
        var restrictedPage = publicPages.indexOf($location.path()) === -1;
        if (restrictedPage && !$window.localStorage.currentUser) {
          $location.path("/login");
        }
      });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state("app", {
          url: "/app",
          templateUrl: "templates/menu.html",
          abstract: true,
          controller: "menuController",
          controllerAs: "vm"
        })
        .state("app.movimentos", {
          url: "/movimentos",
          views: {
            menuContent: {
              templateUrl: "templates/movimentos.html",
              controller: "tabelaController",
              controllerAs: "vm"
            }
          }
        })
        .state("app.cadastroMovimentos", {
          url: "/cadastroMovimentos",
          views: {
            menuContent: {
              templateUrl: "templates/cadastroMovimentos.html",
              controller: "cadastroMovimentosController",
              controllerAs: "vm"
            }
          }
        })
        .state("login", {
          url: "/login",
          templateUrl: "templates/login.html",
          controller: "loginController",
          controllerAs: "vm"
        });

      $urlRouterProvider.otherwise("login");
    });

})();
