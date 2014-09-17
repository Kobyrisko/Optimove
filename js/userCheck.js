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
		$.getJSON('Users.json', function(data){
			$.each(data, function(key, val){
				if(val.Username == oTypedUser.username)
					if(val.Password== oTypedUser.password)
						{
							bFoundMatch = true;
							oTypedUser = val;
							console.log("Found Match");
						}
			});
		if(bFoundMatch)
			console.log(bFoundMatch);
		else
		{
			$("#loginForm h5").html("Wrong Username/Password");
			e.preventDefault();
		}
		});
	}
};
