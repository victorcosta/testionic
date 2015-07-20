angular.module('starter.controllers',  [])

.controller('AppCtrl', function($scope, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/stores.json?callback=JSON_CALLBACK", responseType: "json"}).
    success(function(data, status) {
        $scope.loading = false;
        $scope.stores = data.object;
    }).
    error(function(data, status) {
        console.log(data || "Request failed");
    }); 

})

.controller('SegmentsCtrl', function($scope, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/segments.json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.segments = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    });
})

.controller('SegmentCtrl', function($scope, $stateParams, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/segments/"+$stateParams.segmentId+".json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.segment = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
})

.controller('HubsCtrl', function($scope, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/hubs.json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.hubs = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
})

.controller('HubCtrl', function($scope, $stateParams, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/hubs/"+$stateParams.hubId+".json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        console.log(data.object);
        $scope.loading = false;
        $scope.hub = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
})

.controller('ProductsCtrl', function($scope, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/products.json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.product = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
})

.controller('StoresCtrl', function($scope, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/stores.json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.stores = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
})

.controller('StoreCtrl', function($scope, $stateParams, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/stores/"+$stateParams.storeId+".json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.store = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
});
