var Node = require('./node');

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
};

// Object structure, for reference:

// nodes {
// 	myTitle: {title: myTitle, text: myText},
// 	nextTitle: {title: nextTitle, text: nextText}
// }

// Node {
// 	this.title = title;
// 	this.text = text;
// 	this.connections = [];
// }

Game.prototype.addNode = function(title, text) {
	if(this.nodes[title]){
		// console.log('This game already has a node called', title);
		throw new Error('This game already has a node called', title);
	}

	var node = new Node(title, text);

	if(!this.startingPoint){
		this.startingPoint = node;
	}
	this.nodes[title] = node;
	return node;

};

Game.prototype.getNode = function(title) {
	return this.nodes[title];
};

Game.prototype.connect = function(currentNodeTitle, nextNodeTitle, condition) {
	if (!this.nodes[currentNodeTitle]){
		throw new Error('Node', currentNodeTitle, 'does not exist')
	};
	var currentNode = this.nodes[currentNodeTitle];
	var nextNode = this.nodes[nextNodeTitle];
	currentNode.connect(nextNode, condition);
};
module.exports = Game;
