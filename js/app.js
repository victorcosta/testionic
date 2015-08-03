// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionicLazyLoad','uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.backgroundColorByHexString("#ef473a");
        }
        // $cordovaPlugin.someFunction().then(success, error);

    });
})



.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, uiGmapGoogleMapApiProvider) {

    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.index', {
        url: '/index',
        views: {
            'menuContent': {
                templateUrl: 'templates/index.html',
                controller: 'IndexCtrl'
            }
        }
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
    .state('app.category', {
        url: '/category',
        views: {
            'menuContent': {
                templateUrl: 'templates/category.html',
                controller: 'CategoryCtrl'
            }
        }
    })
    .state('app.subcategory', {
        url: '/subcategory/:categoryId',
        views: {
            'menuContent': {
                templateUrl: 'templates/subcategory.html',
                controller: 'SubcategoryCtrl'
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
    })
    .state('app.productcategory', {
        url: '/productcategory/:subcategoryId',
        views: {
            'menuContent': {
                templateUrl: 'templates/productcategory.html',
                controller: 'ProductcategoryCtrl'
            }
        }
    })
    .state('app.locations', {
        url: '/locations',
        views: {
            'menuContent': {
                templateUrl: 'templates/locations.html',
                controller: 'LocationsCtrl'
            }
        }
    })
    .state('app.productlocation', {
        url: '/productlocation/:locationId',
        views: {
            'menuContent': {
                templateUrl: 'templates/productlocation.html',
                controller: 'ProductlocationCtrl'
            }
        }
    })

    .state('app.map', {
        url: '/map',
        views: {
            'menuContent': {
                templateUrl: 'templates/map.html',
                controller: 'MapCtrl'
            }
        }
    })
    .state('app.product', {
        url: '/product/:productId',
        views: {
            'menuContent': {
                templateUrl: 'templates/product.html',
                controller: 'ProductCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/index');

    $ionicConfigProvider.backButton.text('');

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAeG007ZXIKzOpnuGrNS5QRdmyDKnmD2NA',
        v: '3.17',
        libraries: 'weather,geometry,visualization,places'
    });

});