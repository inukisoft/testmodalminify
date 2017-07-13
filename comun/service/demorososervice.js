angular.module('comun').factory('demorososervice',function($http,$q) {

    var demorososervice = {};

    demorososervice.listaPaisesEuropa = function() {

    	return $http.get("https://restcountries.eu/rest/v2/region/europe").then(
    		function(response){
    			return response.data;
    		},
    		function (response){
    			return $q.reject(response);
    		}
    	);

    };

    demorososervice.getPaisPorIsoAlpha2Code = function(iso2) {

        return $http.get("https://restcountries.eu/rest/v2/alpha/" + iso2).then(
            function(response){
                return response.data;
            },
            function (response){
                return $q.reject(response);
            }
        );

    };

    return demorososervice;
});