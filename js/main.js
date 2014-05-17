angular.module('app', [])

.controller('AppCtrl', [
	'$scope',

	function($scope) {
		var map = L.mapbox.map('map', 'jonahadkins.map-xyxnaoxk').setView([37.27, -76.70], 13);

        $scope.pm = {
            themes: [
                {
                    name:'Parks & Rec',
                    layers:[
                        {
                            url:'data/athleticFields.geojson',
                            name: 'Athletic Field',
                            style: {},
                            onclick: {}
                        }
                    ],
                    active: true
                },
                {
                    name:'Parks & Rec2',
                    layers:[
                        {
                            url:'http://koop.dc.esri.com/github/gis-pluggedin/data/blob::athleticFields',
                            name: 'Athletic Field',
                            style: {},
                            onclick: {}
                        }
                    ],
                    active: false
                }
            ]
        };

        for (var i=0; i < $scope.pm.themes[0].layers.length; i++){
            console.log($scope.pm.themes[0].layers[i].url);
            var featureLayer = L.mapbox.featureLayer()
                .loadURL($scope.pm.themes[0].layers[i].url)
                .addTo(map);

        }
	}
]);