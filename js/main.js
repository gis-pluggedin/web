angular.module('app', [])

.controller('AppCtrl', [
	'$scope',

	function($scope) {
		var map = L.mapbox.map('map').setView([37.27, -76.70], 13);


        $scope.pm = {
            activeLayer: undefined,
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
        }
		
		function _init() {

            /*
            var baseLayers = {

                "Mapbox": L.mapbox.tileLayer('jonahadkins.i94mjj8j').addTo(map),
                "Testing": L.mapbox.tileLayer('examples.map-zgrqqx0w')
            };
            L.control.layers(baseLayers, {'activelayer': $scope.pm[$scope.pm.activeLayer].layerRef}, {'position':'bottomleft'}).addTo(map);
            */
            L.mapbox.tileLayer('jonahadkins.i94mjj8j').addTo(map)
            $scope.toggleLayer(0);



        }

		_init();
	}
]);