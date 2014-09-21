var User = function(sName, sUsername, sPassword, eType){
	this.sName = sName;
	this.sUsername = sUsername;
	this.sPassword = sPassword;
	this.eType = eType;
	this.aPunchedTime = new Array();
};
User.prototype = {
	getName : function(){
		return this.sName;
	},
	setName : function(nameToUpdate){
		this.sName = nameToUpdate;
	},
	getUsername : function(){
		return this.sUsername;
	},
	setUsername : function(userNameToUpdate){
		this.sUsername = userNameToUpdate;
	},
	getPassword : function(){
		return this.sPassword;
	},
	setPassword : function(passwordToUpdate){
		this.sPassword = passwordToUpdate;
	},
	getUserType : function(){
		return this.eType;
	},
	setUserType : function(typeToUpdate){
		this.eType = typeToUpdate;
	},
	addNewPunch : function(punchTime){
		(this.aPunchedTime).push(punchTime);
	},
	getAllPunch : function(){
		return this.aPunchedTime;
	}
};
