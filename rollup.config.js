import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  preserveSymlinks: true,
	input: ['nav-list.js'],
	output: {
		file: 'build/nav-list.js',
    format: 'es',
		sourcemap: true
	},
	plugins: [
    resolve(),
    babel()
  ]
};