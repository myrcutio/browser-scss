const browserScss = require('../dist/browser-scss.js');
const sassjs = require('sass.js');
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('SCSS Functions exist', function(){
	it('findAndConvertTags should not be undefined', function() {
		assert.equal('function', typeof browserScss.findAndConvertTags);
	});
});

describe('should convert a SCSS to CSS3', function() {
	it('Nested CSS3 modifiers', function() {
		var scssSample = " .test { border: 1px solid #eee; &:hover { border: 1px solid #eef; } } ";

		var convertedSCSS = sassjs.compile(scssSample, function(compiledCss) {
			assert.equal('.test {\n  border: 1px solid #eee; }\n  .test:hover {\n    border: 1px solid #eef; }\n', compiledCss.text);
		});
	});
});