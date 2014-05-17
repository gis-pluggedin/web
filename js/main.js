angular.module('app', [])

.controller('AppCtrl', [
	'$scope'

	function($scope) {
		$scope.pm = {
			layers: [
				{ name:'layer 1', url:'' },
				{ name:'layer 2', url:'' }
			]
		}

		var map = L.map('map').setView([37.27, -76.70], 13);


        $scope.pm = {
            layers: [
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
                    state:false
                },
                [{ name:'layer 2', url:'' }]
            ]
        };

        for (var i=0; i < $scope.pm.layers.length; i++){
            alert(i);

        }





	}
]);