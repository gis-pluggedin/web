angular.module('app', [])

.controller('AppCtrl', [
	'$scope',

	function($scope) {
		var map = L.mapbox.map('map', 'jonahadkins.i94mjj8j').setView([37.27, -76.70], 13);

        $scope.pm = {
            activeLayer: undefined,
            layers: [
                {
                    name: 'Athletic Fields',
                    url:'data/athleticFields.geojson',
                    type:'json',
                    layerRef: undefined
                },
                {
                    name: 'Parks',
                    url:'jonahadkins.WMSBG_Parks',
                    type:'mapbox',
                    layerRef: undefined
                }
            ],
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

            $scope.pm.activeLayer = index;
        }
		
		function _init() {
	        $scope.toggleLayer(0);
		}

		_init();
	}
]);