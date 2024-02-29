import { Parcel } from '@parcel/core';

let bundler = new Parcel({
	entries: 'src/js/script.js',
	defaultConfig: '@parcel/config-default',
	serveOptions: {
		port: 3000,
	},
	hmrOptions: {
		port: 3000,
	},
});
console.log('bundler watcher working', bundler);

await bundler.watch();
