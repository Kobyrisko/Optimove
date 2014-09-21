var Initialize = {
	Initialize : function(){
		$("#adminBar").hide();
		$("#punchIn").hide();
		$("#issueReport").hide();
		$("#deleteUserForm").hide();
		$("#userManagmentButton").hide();
		$("#addNewUserForm").hide();
		
		$("#punchInButton").on("click", Initialize.showPunchInSection);
		$("#getAReport").on("click", Initialize.openReportDialog);
		$("#addUserButton").on("click", Initialize.openUserManagment);
		$("#deleteUserButton").on("click", Initialize.fillSelector);
		$("#deleteUserForm").on("submit", Initialize.deleteUser);
		$("#punchInForm").on("submit",Initialize.saveValues);
		$("#issueReportForm").on("submit",Initialize.fillTheTable);
		$("#addNewUserForm").on("submit", Initialize.addNewUser);
		
		Initialize.navBarInitialize();
		Initialize.fillTheTable();
	},
	deleteUser : function(e){
		usersList.splice($("#userSelection")[0].selectedIndex);
		alert("you choose to delete: " + $("#userSelection").val());
		localStorage.setItem("usersList", JSON.stringify(usersList));
		e.preventDefault();
	},
	openUserManagment : function(){
		$("section").hide();
		$("#UserManagement").show();
		$("#addNewUserForm").show();
	},
	navBarInitialize : function(){
		if(currentUser.getUserType() == "Administrator")
		{
			$("#adminBar").show();
		}
		$('#navBar ul').append("<li><a>"+"Hello "+currentUser.getName() +"</a></li>");
	},
	showPunchInSection : function(){
		$("#punchIn").show();
	},
	openReportDialog : function(){
		$("#issueReport").dialog();
	},
	saveValues : function(){
		var newPunch = new PunchTime($("#punchInForm .date").val(),$("#punchInForm .timeIn").val(), $("#punchInForm .timeOut").val());
		currentUser.addNewPunch(newPunch);
		usersList[currentUserIndex].addNewPunch(newPunch);
		localStorage.setItem("currentUser", JSON.stringify(currentUser));
		localStorage.setItem("usersList", JSON.stringify(usersList));
		Initialize.fillTheTable();
	},
	fillSelector : function(){
			$("#UserManagement").show();
			$("#deleteUserForm").show();
			var output = '';
			console.log(usersList);
			for(var i = 0; i <usersList.length; i++)
				{
					output += "<option>";
					output += usersList[i].getName();
					output += "</option>";
				}	
			$("#userSelection").append(output);
	},
	fillTheTable : function(){
			var output = '';
			var aPunchTime = currentUser.getAllPunch();
			for(var i = 0; i < aPunchTime.length; i++)
			{
				aPunchTime[i] = $.extend(new PunchTime(), aPunchTime[i]);
				output += "<tr>";
				output += "<td>";
				output += aPunchTime[i].getDate();
				output += "</td>";
				output += "<td>";
				output += aPunchTime[i].getTimein();
				output += "</td>";
				output += "<td>";
				output += aPunchTime[i].getTimeout();
				output += "</td>";
				output += "</tr>";
			}
			$("#userPunchTimeTable tbody").html(output);
	},
	addNewUser : function(e){
		var newUser = new User($("#Name").val(), $("#Username").val(), $("#Password").val(), $("#UserType").val());
		usersList.push(newUser);
		localStorage.setItem("usersList", JSON.stringify(usersList));
		var usersList2 = JSON.parse(localStorage.getItem("usersList"));
		console.log(usersList2);
		$("section").hide();
		document.getElementById("addNewUserForm").reset();
		e.preventDefault();
	}
};
var currentUser = $.extend(new User(), JSON.parse(localStorage.getItem("currentUser")));
var currentUserIndex = localStorage.getItem("userIndex");
var usersList = JSON.parse(localStorage.getItem("usersList"));
for(var i = 0; i < usersList.length; i++)
{
	usersList[i] = $.extend(new User(), usersList[i]);
	for(var j = 0; j < usersList[i].getAllPunch; j++)
		usersList[i].aPunchedTime[j] = $.extend(new PunchTime(), usersList[i].aPunchedTime[j]);
}
