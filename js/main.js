angular.module('app', [])

.controller('AppCtrl', [
	'$scope',

	function($scope) {
		var map = L.mapbox.map('map', 'jonahadkins.i94mjj8j').setView([37.27, -76.70], 13);

        $scope.pm = {
            layers: [
                {
                    id: 0,
                    name: 'Athletic Fields',
                    url:'data/athleticFields.geojson',
                    active:false,
                    style:{
                        "color": "#ff7800",
                        "weight": 5,
                        "opacity": 0.65
                    }
                },{
                    id: 0,
                    name: 'Parks',
                    url:'data/parks.geojson',
                    active:true,
                    style:{
                        "color": "#348756",
                        "weight": 5,
                        "opacity": 0.65
                    }
                },{
                    id: 1,
                    name: 'Voting Districts',
                    url:'data/votingDistricts.geojson',
                    active:false,
                    style:{
                        "color": "#ff7800",
                        "weight": 5,
                        "opacity": 0.65
                    }
                }
            ]
        };

        $scope.toggleLayer = function(id) {
            var featureLayer = L.mapbox.featureLayer()
                .loadURL($scope.pm.layers[id].url);

            // function to run once marker has loaded
            featureLayer.on('ready', function(){
                // navigate the GeoJSON to get to the coordinates
                var geojson = featureLayer.getGeoJSON();

                L.geoJson(geojson, { style: $scope.pm.layers[id].style }).addTo(map);
            });
        }
	}
]);