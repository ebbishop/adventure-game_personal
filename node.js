var Connection = require('./connection');

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
};

Node.prototype.connect = function(nextNode, condition) {
	// Connection {nextNode: nextNode, condition: condition}
	var errMessage = 'Connection from node: ' + this.title + ' using condition ' + condition + ' already exists';
	if (this.hasConnectionCondition(condition)) {
		throw new Error(errMessage);
	};
	var connection = new Connection(nextNode, condition);
	this.connections.push(connection);
};

Node.prototype.route = function(condition) {
	// when passed a condition:
	// find out if this node has a connection with the given condition
	// if so, find the appropriate connections and return its nextNode
	if (this.hasConnectionCondition(condition)) {
		for (var i = 0; i < this.connections.length; i++) {
			if(this.connections[i].condition == condition){
				return this.connections[i].nextNode;
			}
		};
	};
}

Node.prototype.getConnectionStrings = function() {
	var connStrings = [];
	for (var i = 0; i < this.connections.length; i++) {
		connStrings.push(this.connections[i].condition);
	};
	// array of all connection condition strings
	return connStrings;
};

Node.prototype.hasConnectionCondition = function(condition) {
	for (var i = 0; i < this.connections.length; i++) {
		if (this.connections[i].condition == condition) {
			// console.log( this.connections);
			// console.log ('Connection from node: ' + this.title + ' using condition ' + condition + ' already exists');
			return true;
		};
	};
	// console.log( this.connections);
	// console.log ('Connection from node: ' + this.title + ' using condition: ' + condition + ' does not yet exist');
	return false;
};
module.exports = Node;
