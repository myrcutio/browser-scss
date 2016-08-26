# browser-scss
Compile text/scss style tags in the browser with sass.js

#Installation: 
```
<script type="text/javascript" src="dist/browser-scss.min.js"></script>
```
Note that this will load sass.sync.min.js from cloudflare's CDN if not already present.
(https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js)

#Example usage: 
```
<style type="text/scss">
	.button {
		background-color: #eee;
		&:hover {
			background-color: #eef;
		}
	}
</style>
```

This compiles to:
```
<style type="text/css">
	.button {
		background-color: #eee;
	}
	.button:hover {
		background-color: #eef;
	}
</style>
```

Remember to always compile SASS/SCSS server-side for production environments.
