var Initialize = {
	Initialize : function(){
		$("#punchIn").hide();
		$("#issueReport").hide();
		//$("#userSelection").hide();
		
		$("#punchInButton").on("click", Initialize.showPunchInSection);
		$("#getAReport").on("click", Initialize.openReportDialog);
		$("#punchInForm").on("submit",Initialize.saveValues);
		$("#issueReportForm").on("submit",Initialize.fillTheTable);
		Initialize.fillSelector();
	},
	showPunchInSection : function(){
		$("#punchIn").show();
	},
	openReportDialog : function(){
		$("#issueReport").dialog();
	},
	saveValues : function(){
		var oPunchIn = {
			"Date": $("#punchInForm .date").val(),
			"TimeIn" : $("#punchInForm .timeIn").val(),
			"TimeOut" :$("#punchInForm .timeOut").val()
		};
		localStorage.setItem("userTime", JSON.stringify(oPunchIn));
		var getUser = JSON.parse(localStorage.getItem("userTime"));
		console.log(getUser);
	},
	fillSelector : function(){
		$.getJSON('Users.json', function(data){
			var output = '';
			$.each(data, function(key, val){
				output += "<option>";
				output += val.Name;
				output += "</option>";
			});
			$("#userSelection").append(output);
		});
	},
	fillTheTable : function(){
			$.getJSON('Admin.json', function(data){
			var output = '';
			$.each(data, function(key, val){
				output += "<tr>";
				output += "<td>";
				output += val.Date;
				output += "</td>";
				output += "<td>";
				output += val.Timein;
				output += "</td>";
				output += "<td>";
				output += val.Timeout;
				output += "</td>";
				output += "</tr>";
			});
			$("#userPunchTimeTable tbody").append(output);
		});
	}
};
