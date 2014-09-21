var PunchTime = function(dDate, tTimein, tTimeout){
	this.dDate = dDate;
	this.tTimein = tTimein;
	this.tTimeout = tTimeout;
};

PunchTime.prototype = {
	getDate : function(){
		return this.dDate;
	},
	setDate : function(dDate){
		this.dDate = dDate;
	},
	getTimein : function(){
		return this.tTimein;
	},
	setTimein : function(tTimein){
		this.tTimein = tTimein;
	},
	getTimeout : function(){
		return this.tTimeout;
	},
	setTimeout : function(tTimeout){
		this.tTimeout = tTimeout;
	}
};

