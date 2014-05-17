angular.module('app', [])

.controller('AppCtrl', [
	'$scope',
	'$location',
    '$http',

	function($scope, $location,$http) {

		var map = L.map('map').setView([37.27, -76.70], 13);

		L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png', {
		    maxZoom: 18
		}).addTo(map);

        L.esri.featureLayer('http://koop.dc.esri.com/github/chelm/grunt-geo/samples::bower', {
            style: function (feature) {
                return { color: "#70ca49", weight: 2 };
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(L.Util.template(template, feature.properties));
            }
        }).addTo(map);


	}
]);