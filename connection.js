var Connection = function(nextNode, condition) {
	this.nextNode = nextNode;
	this.condition = condition;
};

Connection.prototype.test = function(condition) {
	if(this.condition == null || this.condition == condition){
		return true;
	}
	return false;
};
module.exports = Connection;
