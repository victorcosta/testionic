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

.controller('ProductCtrl',  function($scope, $sce, $http, $stateParams, $ionicSlideBoxDelegate, $ionicViewService) {
    $scope.showback = false;
    $scope.loading = true;
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/products/"+$stateParams.productId+".json?callback=JSON_CALLBACK", responseType: "json"})
    .success(function(data, status) {
        $scope.loading = false;
        $scope.product = data.object;
        // $ionicSlideBoxDelegate.$getByHandle('image-viewer').slide(5000);
        $ionicSlideBoxDelegate.$getByHandle('image-viewer').update();
    })
    .error(function(data, status) {
        console.log(data || "Request failed");
    }); 
    var history = $ionicViewService.getBackView();
    if (history.stateName != 'app.single') {
        $scope.showback = true;
    };
})

.controller('LocationsCtrl', ['$scope','$http', function($scope, $http) {
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

.controller('ProductlocationCtrl', ['$scope', '$sce', '$http' ,'$stateParams', '$filter', function($scope, $sce, $http, $stateParams, $filter) {
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

.controller('MapCtrl', ['$scope', '$filter', '$http','$location', '$state', function ($scope, $filter, $http, $location, $state) {
    $scope.loading = true;
    

    var createMarker = function(i, objStores, idKey) {

        if (idKey == null) {
            idKey = "id";
        }

        var latitude = objStores[i].Store.latitude;
        var longitude = objStores[i].Store.longitude;
        var ret = {
            latitude:   latitude,
            longitude:  longitude,
            title:      objStores[i].Store.name,
            address:    objStores[i].Store.address,
            storeId:    objStores[i].Store.id,
            icon:       'http://www.liquidanatal.com/site/img/pin.png',
            // options:    {title:objStores[i].Store.name,content:objStores[i].Store.name,}
        };

        ret.onClick = function(e) {
            // $scope.modaltitle   = e.model.title;
            // $scope.modaladdress = e.model.address;            
            // $scope.modalstoreid = e.model.storeId;            
            // $('#modalpin').openModal();
            // console.log(e);
            // $state.go('/stores/'+e.model.storeId);
            $state.go('app.single', {storeId: e.model.storeId});

        };
        ret[idKey] = i;
        return ret;
    };
    

    //Mapa    
    $http({method: 'JSONP', url: "http://www.liquidanatal.com/app/stores.json?callback=JSON_CALLBACK", responseType: "json"})
        .success(function (result) {
            $scope.loading = false;
            $scope.stores = result.object;

            $scope.markers = [];

            $scope.map = {
                center: {
                    latitude: -5.7999189,
                    longitude: -35.2222448
                },
                zoom: 12,
                bounds: {}
            };
                  


            $scope.$watch(function() {
                return $scope.map.bounds;
            }, function(nv, ov) {
                if (!ov.southwest && nv.southwest) {
                    var markers = [];
                    for (var i = 0; i < result.object.length; i++) {
                        markers.push(createMarker(i, result.object))
                    }
                    $scope.markers = markers;
                }
            }, true);


        })
        .error(function (data, status) {
            console.log(data);
        });


}])

.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])
