// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }

    });
})




.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    .state('app.segments', {
        url: '/segments',
        views: {
            'menuContent': {
                templateUrl: 'templates/segments.html',
                controller: 'SegmentsCtrl'
            }
        }
    })
    .state('app.segment', {
        url: '/segments/:segmentId',
        views: {
            'menuContent': {
                templateUrl: 'templates/segment.html',
                controller: 'SegmentCtrl'
            }
        }
    })
    .state('app.hubs', {
        url: '/hubs',
        views: {
            'menuContent': {
                templateUrl: 'templates/hubs.html',
                controller: 'HubsCtrl'
            }
        }
    })
    .state('app.hub', {
        url: '/hubs/:hubId',
        views: {
            'menuContent': {
                templateUrl: 'templates/hub.html',
                controller: 'HubCtrl'
            }
        }
    })
    .state('app.products', {
        url: '/products',
        views: {
            'menuContent': {
                templateUrl: 'templates/products.html',
                controller: 'ProductsCtrl'
            }
        }
    })
    .state('app.stores', {
        url: '/stores',
        views: {
            'menuContent': {
                templateUrl: 'templates/stores.html',
                controller: 'StoresCtrl'
            }
        }
    })
    .state('app.single', {
        url: '/stores/:storeId',
        views: {
            'menuContent': {
                templateUrl: 'templates/store.html',
                controller: 'StoreCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/stores');
});