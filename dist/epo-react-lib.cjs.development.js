'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@styles/index.scss');
var Button = require('@components/Atoms/Button');



Object.keys(Button).forEach(function (k) {
	if (k !== 'default') Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return Button[k];
		}
	});
});
//# sourceMappingURL=epo-react-lib.cjs.development.js.map
