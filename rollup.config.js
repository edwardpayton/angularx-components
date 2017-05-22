export default {
	entry: 'dist/index.js',
	dest: 'dist/bundles/angularx-components.umd.js',
	sourceMap: false,
	format: 'umd',
	moduleName: 'ng.angularx-components',
	globals: {
		'@angular/core': 'ng.core',
		'@angular/common': 'ng.common'
	}
}
