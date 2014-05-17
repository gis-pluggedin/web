angular.module('app', [])

.controller('AppCtrl', [
	'$scope',

	function($scope) {
		var map = L.map('map').setView([37.27, -76.70], 13);

        $scope.pm = {
            themes: [
                {
                    name:'Parks & Rec',
                    layers:[
                        {
                            url:'http://koop.dc.esri.com/github/gis-pluggedin/data/blob::athleticFields',
                            name: 'Athletic Field',
                            style: {},
                            onclick: {}
                        }
                    ],
                    active: false
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
            L.esri.featureLayer($scope.pm.themes[0].layers[i].url).addTo(map);
        }
	}
]);