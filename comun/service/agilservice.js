angular.module('comun').factory('agilservice',function($http) {

    var agilservice = {};

    // este servicio responde con una promesa y función de retrolamada
    agilservice.currentWeather = function() {
    	
    	return $http.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e6e2d88409ceb9893e1af4aaf458df14");
    } 

    return agilservice;
});