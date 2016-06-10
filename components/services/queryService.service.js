;(function() {


  'use strict';
  angular
    .module('HMZAdminApp')
    .factory('QueryService', [
      '$http', '$q', 'site.config', QueryService
    ]);



  //////////////// factory



  function QueryService($http, $q, SiteConfig) {


    var service = {
	  queryDashboardData : loadDashboardData,
	  querySystemData : loadSystemData
    };

    return service;


    //////////////// definition

	function loadDashboardData(params, data){
		return query('GET', SiteConfig.DASHBOARD_API_URL, params, data);
	}
	
	function loadSystemData(params, data){
		return query('GET', SiteConfig.SYSTEMHEALTH_API_URL, params, data);
	}
		
    function query(method, url, params, data) {

      var deferred = $q.defer();

      $http({
        method: method,
        url: url,
        params: params,
        data: data
      }).then(function(data) {
        if (!data.config) {
          console.log('Server error occured.');
        }
        deferred.resolve(data);
      }, function(error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }

  }


})();
