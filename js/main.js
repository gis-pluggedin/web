angular.module('app', [])

.controller('AppCtrl', [
	'$scope',

	function($scope) {
		var map = L.mapbox.map('map').setView([37.27, -76.70], 13);


        $scope.pm = {
            activeLayer: undefined,
            availableLayers: [],
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

            try{
                map.removeLayer($scope.pm.availableLayers[$scope.pm.activeLayer]);
            } catch (err){
                console.log('No Layers to Remove')
            }

            $scope.pm.availableLayers[index].setZIndex(7);
            map.addLayer($scope.pm.availableLayers[index]);

            $scope.pm.activeLayer = index;

            console.log($scope.pm.activeLayer);
        };
		
		function _init() {
            var baseLayers = {

                "Mapbox": L.mapbox.tileLayer('jonahadkins.i94mjj8j').addTo(map),
                "Testing": L.mapbox.tileLayer('examples.map-zgrqqx0w')
            };

            for (var i=0; i<$scope.pm.layers.length; i++){
                $scope.pm.availableLayers.push($scope.addLayer($scope.pm.layers[i]))
            }
            L.control.layers(baseLayers, {}, {position:'topleft'}).addTo(map);
            $scope.toggleLayer(0);
        }

		_init();
	}
]);