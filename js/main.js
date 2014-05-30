angular.module('app', [])

.controller('AppCtrl', [
	'$scope',

	function($scope) {
		var map = L.mapbox.map('map').setView([37.27, -76.70], 13);


        $scope.pm = {
            activeLayer: undefined,
            availableLayers: {},
            layers: [
                {
                    name: 'Parks',
                    url:'jonahadkins.WMSBG_Parks',
                    type:'mapbox',
                    layerRef: undefined
                },
                {
                    name: 'Parcels',
                    url:'jonahadkins.WMSBG_Parcels',
                    type:'mapbox',
                    layerRef: undefined
                },
                {
                    name: 'Voting Precincts',
                    url:'jonahadkins.WMSBG_Voting',
                    type:'mapbox',
                    layerRef: undefined

                }
            ]
        };
        $scope.addLayer = function(layerConfig){
            /*
             Use the layer config to initialize the layer to the map.
             */
            var layer;
            if (layerConfig.type === 'json'){
                layer = L.mapbox.featureLayer().loadURL(layerConfig.url)
            } else if (layerConfig.type == 'mapbox'){
                layer = L.mapbox.tileLayer(layerConfig.url)
            } else {
                console.log('Cannot load ' + layerConfig.name + '. Layer type does not exist.')
            }
            return layer;
        };

        $scope.toggleLayer = function(index) {
            if (index === $scope.pm.activeLayer) return;

            if ($scope.pm.activeLayer !== undefined) {
                map.removeLayer($scope.pm.layers[$scope.pm.activeLayer].layerRef);
            }
            if ($scope.pm.layers[index].type === 'json'){
                $scope.pm.layers[index].layerRef = L.mapbox.featureLayer()
                    .loadURL($scope.pm.layers[index].url)
                    .addTo(map);
            } else if ($scope.pm.layers[index].type == 'mapbox'){
                $scope.pm.layers[index].layerRef = L.mapbox.tileLayer($scope.pm.layers[index].url)
					.addTo(map);
            }
            else{
                console.log('Cannot load ' + $scope.pm.layers[index].name);
                index = $scope.pm.activeLayer;
            }

            $scope.pm.activeLayer = index;
        };
		
		function _init() {
            var baseLayers = {

                "Mapbox": L.mapbox.tileLayer('jonahadkins.i94mjj8j').addTo(map),
                "Testing": L.mapbox.tileLayer('examples.map-zgrqqx0w')
            };

            for (var i=0; i<$scope.pm.layers.length; i++){
                $scope.pm.availableLayers[$scope.pm.layers[i].name] = ($scope.addLayer($scope.pm.layers[i]))
            }
            L.control.layers(baseLayers, $scope.pm.availableLayers).addTo(map);
            //$scope.toggleLayer(0);
            console.log($scope.pm.availableLayers)
        }

		_init();
	}
]);