angular.module('starter.controllers',  [])

.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.loading = true;
}])

.controller('IndexCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/products/featured.json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.product = data.object;
        
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
}])

.controller('SegmentsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/segments.json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.segments = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    });
}])

.controller('SegmentCtrl', ['$scope', '$filter', '$http' ,'$stateParams', function ($scope, $filter, $http, $stateParams) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/segments/"+$stateParams.segmentId+".json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.segment = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    });

    $scope.searchFilter = function (store) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(store.name);
    };
}])

.controller('CategoryCtrl', ['$scope','$http',function($scope, $http) {
    $scope.loading = true;
    
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/categories.json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.categories = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
    
    
}])
.controller('SubcategoryCtrl', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
    $scope.loading = true;
    
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/categories/sub/"+$stateParams.categoryId+".json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.subcategories = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 

}])

.controller('StoreCtrl', ['$scope', '$sce', '$http' ,'$stateParams', '$filter', function($scope, $sce, $http, $stateParams, $filter) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/stores/"+$stateParams.storeId+".json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.store = data.object;
        $scope.url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAeG007ZXIKzOpnuGrNS5QRdmyDKnmD2NA&q="+data.object.Store.address;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
    $scope.searchFilter = function (produto) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(produto.name);
    };
}])

.controller('ProductsCtrl', ['$scope', '$http',function($scope, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/products.json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.product = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
}])

.controller('ProductcategoryCtrl', ['$scope', '$sce', '$http' ,'$stateParams', '$filter', function($scope, $sce, $http, $stateParams, $filter) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/categories/"+$stateParams.subcategoryId+".json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.categories = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    });
    $scope.searchFilter = function (produto) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(produto.name);
    };
}])

.controller('StoresCtrl', ['$scope','$http', function($scope, $http) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/stores.json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.stores = data.object;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
    $scope.searchFilter = function (stores) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(stores.Store.name);
    };
}])

.controller('StoreCtrl', ['$scope', '$sce', '$http' ,'$stateParams', '$filter', function($scope, $sce, $http, $stateParams, $filter) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/stores/"+$stateParams.storeId+".json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.store = data.object;
        $scope.url = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAeG007ZXIKzOpnuGrNS5QRdmyDKnmD2NA&q="+data.object.Store.address;
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
    $scope.searchFilter = function (produto) {
        var keyword = new RegExp($scope.nameFilter, 'i');
        return !$scope.nameFilter || keyword.test(produto.name);
    };
}])

.controller('ProductCtrl',  function($scope, $sce, $http, $stateParams, $ionicSlideBoxDelegate) {
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/products/"+$stateParams.productId+".json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.product = data.object;
        $ionicSlideBoxDelegate.update();
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
})

.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])
