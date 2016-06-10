;(function() {

  'use strict';
  angular
    .module('HMZAdminApp')
    .directive('sideBar', SideBar);
  
  SideBar.$inject = ['site.config','QueryService','$rootScope','$timeout','$location'];
  
  function SideBar(SiteConfig, QueryService, $rootScope, $timeout, $location) {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
	  scope : {},
      templateUrl: 'components/directives/sidebar.tmpl.html',
	  link : SiteBarLink 
    };
	
	function SiteBarLink(scope){
		scope.AppName = SiteConfig.APP_NAME;
		scope.ProjectList = SiteConfig.PROJECTS;
		scope.SubMenuActive = false;
		
		
	}
    return directiveDefinitionObject;
  }
  
  

})();