/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('HMZAdminApp')
    .controller('MainController', MainController);

  MainController.$inject = ['site.config','QueryService','$rootScope','$timeout','$location','moment'];


  function MainController(SiteConfig, QueryService, $rootScope, $timeout, $location, moment) {

    // 'controller as' syntax
    var self = this;
	self.DefectsStats = [];
	self.server = SiteConfig.SERVER;
	self.today = new Date();
	self.severityList = SiteConfig.SEVERITYLIST;
	$rootScope.$emit('onLocationChangeSuccess', $location.$$path);
	
	
	QueryService.queryDashboardData().then(function(response){
		HMZAdminMgr.ramUsageChart(response.data[0].ramreport);
		HMZAdminMgr.renderDiscUsageChart(response.data[0].discreport);
		HMZAdminMgr.renderBandwidthUsageChart(response.data[0].bandwidthreport);
		HMZAdminMgr.renderNewAccountsChart(response.data[0].newaccountsreport);
		$(".main-wrapper .pushable").removeClass("loading");
	});
	
	
	
  }


})();