function BrowserScssConvertStyleTags() {
	var sassTags = document.getElementsByTagName('style');
	for (var i = sassTags.length - 1; i >= 0; i--) {
		if ( sassTags[i].type.toLowerCase() === 'text/scss' ) {
			Sass.compile(sassTags[i].innerHTML, function(renderedSass) {
				var rawStyle = document.createElement('style');
				rawStyle.type = 'text/css';
				rawStyle.innerHTML = renderedSass.text;
				document.head.appendChild(rawStyle);
			});
		}
	}
}

if (typeof Sass === 'undefined' || typeof Sass.compile !== 'function') {
	var sassJSScript = document.createElement('script');
	sassJSScript.type = 'text/javascript';
	sassJSScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js';
	sassJSScript.onload = BrowserScssConvertStyleTags;
	document.head.appendChild(sassJSScript);
}

console.warn(
	'You are using the in-browser SASS CSS transformer. Be sure to precompile ' +
	'your stylesheets for production - https://www.npmjs.com/package/node-sass'
);

if (typeof window !== 'undefined' && window !== null && window.addEventListener !== null && typeof Sass !== 'undefined' && typeof Sass.compile === 'function') {
	window.addEventListener('DOMContentLoaded', function() {BrowserScssConvertStyleTags()}, false);
}
