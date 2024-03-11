import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import css from 'rollup-plugin-css-only';
import json from '@rollup/plugin-json';
//import terser from '@rollup/plugin-terser';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
   onwarn: function (warning, warn) {
      if (warning.code === 'CIRCULAR_DEPENDENCY') return;
      warn(warning);
  },
   input: 'src/index.js',
   external: {'react': 'React', 'topojson': 'topojson-client', 'papaparse': 'Papa'},
   output: {
      file: 'public/bundle.js',
      format: 'es',
      sourcemap: false,
      inlineDynamicImports: true},
    
   plugins: [
      nodeResolve({
         extensions: ['.js'],
         resolve: {mainFields: ['module', 'main']},
         namedExports: { 'papaparse': ['parse']},
      }),
      babel({
         babelHelpers: 'bundled',
         "presets": [["@babel/preset-react",{"runtime": "automatic"}]],
         extensions: ['.js']
      }),
      commonjs({}),
      replace({
         preventAssignment: false,
         'process.env.NODE_ENV': '"development"'
      }),
      css({output:'bundle.css'}),
      nodePolyfills({
         include:null
      }),
      // terser(),
      json()
   ],
   
}