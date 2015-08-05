Purpose
--------------

Javascript Plug-in to add a sheen to text (using background-clip) or buttons/divs (shapes defined by css). Does not use jQuery.


Supported Browsers
-----------------------------
Both features work in Safari & Chrome Browsers (webkit)

Only the div animations works in Firefox & IE 10/11 - (background-clip not supported)

All other browsers (<= IE9) will degrade gracefully.


How to Use
-----------------------------

Give you markup a unique id and include the masked text in the node:

	<h1 id="sheen">DANGER!!</h1>

Instantiate the plugin:

	<script type="text/javascript">
		var glowing = new DynamicSheen({
			id:'sheen'
		});
	</script>

Options
-----------------------------

The following options can be used to customize the sheen:

	type: 'text-sheen' - ['text-sheen' or 'button-sheen'] The text option uses your content as a mask and requires support of background-clip. The button option will use your div as a boundry for the sheen.
	
	id: 'default' - REQUIRED: Set this to be the unique id you give to your sheen.
	
	textClass: '' - OPTIONAL: If you want to add a class that styles the text, you can do it here.
	
	node: 'div' - Defaults to 'div' - You can have your sheen fall inline by using 'span'.
	
	baseColor: '#ff00cc' - The color of the text under the glow. This is set as a background color.
	
	speed:'fast', Defaults to 'fast' ['superfast', 'fast', 'medium', 'slow', 'superslow'] They correspond to 4, 3, 2, 1, .5 seconds respectively. These values can also be changed in the css.
	
	repeat:'infinite' - ['hover' or 'infinite'] - Infinite will repeat for ever. Hover will only show when the mouse interacts.
	
CSS
-----------------------------

The css is compiles with compass and sass.

If you want to change the color of the sheen you will have to adjust and process the sass again.

There are two variables you can adjust:

	$color: #ffffff; - The color of your sheen
	$opacity: .85; - The maximum opacity of the sheen