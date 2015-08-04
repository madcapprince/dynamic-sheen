/*var DynamicSheen = {

	type : 'text', // 'image'/'text'
	shadow: false, //tf
	

	init : function(){
		var _scope = this;
		
		// _scope.addHandlers();
		
		console.log(this);
		
	},

	addHandlers : function(){
	
	}
}*/

// Create an immediately invoked functional expression to wrap our code
(function() {
	
	// Define our constructor
	this.DynamicSheen = function() {
		
		this.sheen = null
		// Define option defaults
		
		
		var defaults = {
			id: 'default',
			content: null,
			textClass: '',
			node: 'div',
			baseColor: '#ff00cc', //color of the text under the glow
			sheenColor: '#ffffff',
			speed:'slow', // fast or slow
			repeat:'infinite' // number or 'infinite'
		}
	
		// Create options by extending defaults with the passed in arugments
		if (arguments[0] && typeof arguments[0] === "object") {
			this.options = extendDefaults(defaults, arguments[0]);
		}
		
		
		// Utility method to extend defaults with user options
		function extendDefaults(source, properties) {
			var property;
			for (property in properties) {
				if (properties.hasOwnProperty(property)) {
					source[property] = properties[property];
				}
			}
			return source;
		}
		
		this.options.content = document.getElementById(this.options.id).innerHTML;
		// console.log('this',document.getElementById(this.options.id).innerHTML)
		
		// function init(_) {
		DynamicSheen.prototype.init = function() {
			
			var elem = document.getElementById(this.options.id);
			elem.innerHTML = "";
			elem.style.position = "relative";
			
			var sheenHolder = document.getElementById(this.options.id);
			this.sheen = document.createElement(this.options.node);
			this.sheen.className = "sheen-base " + this.options.textClass;
			this.sheen.innerHTML = this.options.content;
			this.sheen.style.backgroundColor = this.options.baseColor;
			
			sheenHolder.appendChild(this.sheen);
			
			this.sheen = document.createElement(this.options.node);
			this.sheen.className = "sheen sheen-glow " + this.options.textClass + ' ' + this.options.speed + ' ' + this.options.repeat;
			this.sheen.dataset.content = this.options.content;
			//this.sheen.innerHTML = this.options.content;
			
			sheenHolder.appendChild(this.sheen);
			
			console.log("started", this.options.id); 
		 }
		 
 		this.init();
	

  }
}());