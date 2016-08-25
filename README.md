# browser-scss
Compile text/scss style tags in the browser with sass.js

Installation: 
```
<script type="text/javascript" src="browser-scss.min.js"></script>
```

Example usage: 
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
