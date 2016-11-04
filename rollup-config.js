import rollup from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify'

//paths are relative to the execution path
export default {
    entry: 'app/main-aot.js',
    dest: 'aot/dist/build.js', // output a single application bundle
    sourceMap: false,
    format: 'iife',
    plugins: [
        nodeResolve({ jsnext: true, module: true }),
        commonjs({
            include: [
                'node_modules/rxjs/**',
                'node_modules/angular2-highcharts/**'
            ],
            namedExports: {
                'node_modules/angular2-highcharts/index.js': ['ChartModule']
            }
        }),
        uglify()
    ]
}
