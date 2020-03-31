const pkgUp = require('pkg-up');

(async () => {
	console.log(await pkgUp());
	//=> '/Users/sindresorhus/foo/package.json'
})();