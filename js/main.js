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
                { name:'layer 1', url:'' },
                { name:'layer 2', url:'' }
            ]
        }

		L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png', {
		    maxZoom: 18
		}).addTo(map);

	}
]);