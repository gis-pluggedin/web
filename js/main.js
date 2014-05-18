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
                    url:'data/athleticFields.geojson'
                },
                {
                    id: 1,
                    name: 'Buildings',
                    url:'data/buildings.geojson'
                }
            ],
        };

        $scope.toggleLayer = function(id) {
            var featureLayer = L.mapbox.featureLayer()
                .loadURL($scope.pm.layers[id].url)
                .addTo(map);
        }
	}
]);