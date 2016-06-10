HMZAdminMgr = {};
HMZAdminMgr.load = function(){
	$('.ui.sidebar').sidebar();
}
HMZAdminMgr.ramUsageChart = function(details){
	    
	    var ctx = document.getElementById('ramUsageChart');
		var data = {
			labels: details.labels,
			datasets: [
				{
					data: details.data,
					backgroundColor: [
						"#FF6384",
						"#36A2EB",
						"#FFCE56",
						"#21ba45",
						"#a333c8"
					],
					hoverBackgroundColor: [
						"#FF6384",
						"#36A2EB",
						"#FFCE56",
						"#21ba45",
						"#a333c8"
					]
				}]
		};
		var defectDoughnutChart = new Chart(ctx, {
			type: 'doughnut',
			animation:{
				animateScale:true
			},
			data: data,
			options: {
				legend :{
					display : false
				}
			}
		});
		$('#ramUsageChart').closest('table').find(".chartData").html(HMZAdminMgr.generateTabularData(data));
}
HMZAdminMgr.renderNewAccountsChart = function(details){
	    var ctx = document.getElementById('newAccountsChart');
		var data = {
			labels: details.labels,
			datasets: [
				{
					data: details.data,
					backgroundColor: [
						"#FF6384",
						"#36A2EB"
					],
					hoverBackgroundColor: [
						"#FF6384",
						"#36A2EB"
					],
					label: 'Accounts'
				}]
		};
		var barChart = new Chart(ctx, {
			type: 'horizontalBar',
			animation:{
				animateScale:true
			},
			data: data,
			options: {
				legend :{					
					display : true
				}
			}
		});
}
HMZAdminMgr.renderProcessWiseChart = function(details){
	    var ctx = document.getElementById('processWiseChart');
		var data = {
			labels: details.labels,
			datasets: [
				{
					label: "CPU",
					backgroundColor: "rgba(255,99,132,0.9)",
					borderColor: "rgba(0,0,0,0.1)",
					borderWidth: 0,
					hoverBackgroundColor: "rgba(255,99,132,0.4)",
					hoverBorderColor: "rgba(255,99,132,1)",
					data: details.cpudata
				},
				{
					label: "MEMORY",
					backgroundColor: "rgb(94,176,223)",
					borderColor: "rgba(0,0,0,0.1)",
					borderWidth: 0,
					hoverBackgroundColor: "rgb(94,176,223)",
					hoverBorderColor: "rgba(0,0,0,1)",
					data: details.memorydata
				}]
		};
		var barChart = new Chart(ctx, {
			type: 'bar',
			animation:{
				animateScale:true
			},
			data: data,
			options: {
				legend :{					
					display : true
				},
				scales: {
					yAxes: [{
						stacked: false
					}]
				}
			}
		});
}
HMZAdminMgr.renderDiscUsageChart = function(details){
	    var ctx = document.getElementById('discUsageChart');
		var data = {
			labels: details.labels,
			datasets: [
				{
					data: details.data,
					backgroundColor: [
						"#FF6384",
						"#36A2EB",
						"#FFCE56",
						"#21ba45",
						"#a333c8",
						"#4BC0C0"
					],
					hoverBackgroundColor: [
						"#FF6384",
						"#36A2EB",
						"#FFCE56",
						"#21ba45",
						"#a333c8",
						"#4BC0C0"
					]
				}]
		};
		var pieChart = new Chart(ctx, {
			type: 'pie',
			animation:{
				animateScale:true
			},
			data: data,
			options: {
				legend :{					
					display : false
				}
			}
		});
		$('#discUsageChart').closest('table').find(".chartData").html(HMZAdminMgr.generateTabularData(data));
}
HMZAdminMgr.renderBandwidthUsageChart = function(details){
	    var ctx = document.getElementById('bandwidthUsageChart');
		var data = {
			labels: details.labels,
			datasets: [
				{
					label: 'in GB',
					data: details.data,
					backgroundColor: [
						"#FF6384",
						"#36A2EB",
						"#FFCE56",
						"#21ba45",
						"#a333c8",
						"#4BC0C0"
					],
					hoverBackgroundColor: [
						"#FF6384",
						"#36A2EB",
						"#FFCE56",
						"#21ba45",
						"#a333c8",
						"#4BC0C0"
					]
				}]
		};
		var barAreaChart = new Chart(ctx, {
			type: 'bar',
			animation:{
				animateScale:true
			},
			data: data,
			options: {
				legend :{					
					display : true
				}
			}
		});
}


HMZAdminMgr.generateTabularData = function(data){
    var labels = data.labels, 
	color = data.datasets[0].backgroundColor,
	dataset = data.datasets[0].data;
	var tableHtml = "<table class=\"ui very basic table\">";
	for(var i=0,len=labels.length;i<len;i++){
		tableHtml += '<tr><td><i style="color:'+color[i]+'" class="icon square"></i>'+labels[i]+'</td><td>'+dataset[i]+'%</td></tr>';
	}
	tableHtml += "</table>";
	return tableHtml;
	
}
// attach ready event
$(document).ready(HMZAdminMgr.load);
