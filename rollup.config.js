import {terser} from "rollup-plugin-terser";

export default {
  input: 'src/index.spec.js',
  output: [
    {
      file: 'dist/methods.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/methods.cjs.min.js',
      format: 'cjs',
      plugins: [terser()]
    },
    {
      file: 'dist/methods.es.js',
      format: 'es'
    },
    {
      file: 'dist/methods.es.min.js',
      format: 'es',
      plugins: [terser()]
    }
  ]
};
