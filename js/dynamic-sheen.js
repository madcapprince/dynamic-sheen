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
			type: 'text-sheen', //text-sheen or button-sheen
			id: 'default',
			content: null,
			textClass: '',
			node: 'div',
			baseColor: '#ff00cc', //color of the text under the glow
			speed:'fast', // superfast, fast, medium, slow, superslow
			repeat:'infinite' // 'hover' or 'infinite'
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
		
		var origContent = document.getElementById(this.options.id).innerHTML,
			replacedContent = origContent,//document.getElementById(this.options.id).innerHTML;
			pattern = "&nbsp;",
			re = new RegExp(pattern, "g");
		
		replacedContent = origContent.replace(re, " ");
		this.options.content = replacedContent;
		
		// console.log('this',document.getElementById(this.options.id).innerHTML)
		
		// function init(_) {
		DynamicSheen.prototype.init = function() {
			
			var elem = document.getElementById(this.options.id);
			elem.innerHTML = "";
			elem.style.position = "relative";
			
			var sheenHolder = document.getElementById(this.options.id);
			this.sheen = document.createElement(this.options.node);
			this.sheen.className = this.options.type + ' ' + this.options.textClass;
			this.sheen.innerHTML = origContent;//this.options.content;
			if (this.options.type == 'text-sheen' && hasBackgroundClip()) this.sheen.style.backgroundColor = this.options.baseColor;
			
			sheenHolder.appendChild(this.sheen);
			
			if (hasBackgroundClip() || this.options.type != 'text-sheen'){
				
				this.sheen = document.createElement(this.options.node);
				this.sheen.className = "sheen sheen-glow " + this.options.type + ' ' + this.options.textClass + ' ' + this.options.speed + ' ' + this.options.repeat;
				if (this.options.type == 'text-sheen') this.sheen.dataset.content = this.options.content;
			
				sheenHolder.appendChild(this.sheen);
			
			}
			
			console.log("started", this.options.id); 
		 }
		 
		 
		var hasBackgroundClip = function() {
			return document.body.style.webkitBackgroundClip != undefined;
		};
		 
		
 		this.init();
	

  }
}());