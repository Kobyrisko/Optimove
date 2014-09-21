var usersList = JSON.parse(localStorage.getItem("usersList"));
var Login = {
	Initialize : function(){
		$("#loginForm").on("submit",Login.checkValues);
	},
	checkValues : function(e){
		var oTypedUser = {
			username : $("#username").val(),
			password : $("#password").val() 
		};
		var bFoundMatch = false;
			for(var i = 0; i < usersList.length; i++)
			{
				usersList[i] = $.extend(new User(), usersList[i]);
				if(usersList[i].getUsername() == oTypedUser.username)
					if(usersList[i].getPassword() == oTypedUser.password)
					{
						bFoundMatch = true;
						localStorage.setItem("currentUser", JSON.stringify(usersList[i]));
						localStorage.setItem("userIndex", i);
					}
			}
			if(!bFoundMatch)
			{
				e.preventDefault();
				$("#loginForm h5").html("Wrong Username/ Password");
			}
	}
};

