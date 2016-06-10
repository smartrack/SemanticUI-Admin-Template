;(function() {


	/**
	 * Place to store API URL or any other constants
	 * Usage:
	 *
	 * Inject CONSTANTS service as a dependency and then use like this:
	 * CONSTANTS.API_URL
	 */
  angular
  	.module('HMZAdminApp')
    .constant('site.config', {
      'APP_NAME': 'HMZ Admin',
	  'SERVER' : {
			'NAME': 'cuboidNodezDs12',
			'START_DATE': '2016-06-03',
			'END_DATE': '2016-06-16'
	  },
      'SEVERITYLIST':[{'name':'Very High','value':'VERY_HIGH'},{'name':'High','value':'HIGH'},{'name':'Medium','value':'MEDIUM'},{'name':'Low','value':'LOW'}],	  
	  'DASHBOARD_API_URL' : 'rest/dashboard_back_end_response.json',
	  'SYSTEMHEALTH_API_URL' : 'rest/system_health_report_response.json',
	  'PROJECTS' : [{'name': 'Project A','url':'http://somename.com/projects/projectA'},
					{'name': 'Project B','url':'http://somename.com/projects/projectB'},
					{'name': 'Project C','url':'http://somename.com/projects/projectC'},
					{'name': 'Project D','url':'http://somename.com/projects/projectD'},
					{'name': 'Project E','url':'http://somename.com/projects/projectE'},
					{'name': 'Project F','url':'http://somename.com/projects/projectF'}]
    });

})();
