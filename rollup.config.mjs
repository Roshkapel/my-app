import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import builtins from 'rollup-plugin-node-builtins'
import externalGlobals from "rollup-plugin-external-globals";
import css from 'rollup-plugin-css-only';
import json from '@rollup/plugin-json';
import globals from 'rollup-plugin-node-globals';
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
      json(),
      nodeResolve({
         extensions: ['.js'],
         resolve: {mainFields: ['module', 'main']},
         browser: 'true',
         preferBuiltins: false
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

      externalGlobals({}),
      globals(),
      builtins()

      // terser(),
     
   ],
   
}