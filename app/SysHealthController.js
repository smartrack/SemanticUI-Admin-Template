/**
 * System health application controller
 * 
 */
;(function() {

  angular
    .module('HMZAdminApp')
    .controller('SysHealthController', SysHealthController);

  SysHealthController.$inject = ['site.config','QueryService','$rootScope','$timeout','$location'];


  function SysHealthController(SiteConfig, QueryService, $rootScope, $timeout, $location) {

    // 'controller as' syntax
    var self = this;
	
	$rootScope.$emit('onLocationChangeSuccess', $location.$$path);
	$(".main-wrapper .pushable").addClass("loading");
	QueryService.querySystemData().then(function(response){
	    var data = response.data;
		self.timestamp = data.timestamp;
		self.processReportInDetail = data.processReportInDetail;
		HMZAdminMgr.renderProcessWiseChart(data.processReport);
		$(".main-wrapper .pushable").removeClass("loading");
		 
	});
	
	
  }


})();