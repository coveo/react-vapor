const del = require('del');
const dtsGenerator = require('dts-generator');
const footer = require('gulp-footer');
const gulp = require('gulp-help')(require('gulp'));
const gutil = require('gulp-util');
const Karma = require('karma').Server;
const path = require('path');
const replace = require('gulp-replace');
const remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
const runSequence = require('gulp-sequence');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const packageJSON = require('./package.json');

// <editor-fold desc="Clean">
const clean = (paths, done) => {
    del(paths, {force: true}).then((deletedFiles) => {
        gutil.log(gutil.colors.green('Files deleted:'), deletedFiles.join(', '));
        done();
    });
};

gulp.task('clean:dist', false, (done) => {
    clean(['dist'], done);
});

gulp.task('clean:docs', false, (done) => {
    clean(['docs/assets'], done);
});

gulp.task('clean:tests', false, (done) => {
    clean(['coverage'], done);
});

gulp.task('clean', 'Clean all', ['clean:dist', 'clean:docs', 'clean:tests'], (done) => {
    if (gutil.env.all === true) {
        clean([
            '**/*.orig',
            '**/*.rej',
            'node_modules',
        ], done);
    } else {
        done();
    }
});
// </editor-fold>

// <editor-fold desc="Typescript d.ts generation">
gulp.task('ts:definitions', 'Generate the project definition file', (done) => {
    runSequence('internalDefs', 'cleanDefs', done);
});

gulp.task('internalDefs', false, () =>
    dtsGenerator.default({
        name: 'ReactVapor',
        project: './',
        out: 'dist/react-vapor.d.ts',
        exclude: ['node_modules/**/*.d.ts', 'src/Index.ts', '**/*Examples*', '**/*Example*', '**/*.spec.*'],
    }));

gulp.task('cleanDefs', false, () =>
    gulp.src('dist/react-vapor.d.ts')
        .pipe(replace(/: Partial<[A-Za-z]+>/gm, ''))
        .pipe(replace(/: React.KeyboardEvent<[A-Za-z]+>/gm, ''))
        .pipe(replace(/: React.MouseEvent<[A-Za-z]+>/gm, ''))
        .pipe(replace(/: React.FocusEvent<[A-Za-z]+>/gm, ''))
        .pipe(replace(/import.*$/gm, ''))
        .pipe(replace(/export =.+;$/gm, ''))
        .pipe(replace(/export default.+;$/gm, ''))
        .pipe(replace(/export .+ from .+$/gm, ''))
        .pipe(replace(/export (?:default )?(.*)$/gm, '$1'))
        .pipe(replace(/private .+;$/gm, ''))
        .pipe(replace(/\t[A-Za-z]+;$/gm, ''))
        .pipe(replace(/\n\t\s*(\n\t\s*)/g, '$1'))
        .pipe(replace(/declare module (.*) {$/gm, 'declare module ReactVapor {'))

        .pipe(footer('declare module "react-vapor" {\n\texport = ReactVapor;\n}'))

        .pipe(gulp.dest('dist')));
// </editor-fold>

// <editor-fold desc="Unit tests">
const runTests = (done, singleRun, browser) => {
    new Karma({
        configFile: path.resolve('karma.conf.js'),
        browsers: [browser],
        singleRun,
    }, done).start();
};

gulp.task('test:single', false, (done) => {
    runTests(done, true, 'PhantomJS');
});

gulp.task('test:remap', false, () =>
    gulp.src('./coverage/coverage.json')
        .pipe(remapIstanbul({
            reports: {
                html: 'coverage/report',
            },
        })));

gulp.task('test', 'Run all tests in PhantomJS and exit', (done) => {
    runSequence('test:single', 'test:remap', done);
});

gulp.task('test:browser', 'Run all tests in Chrome and watch', (done) => {
    runTests(done, false, 'Chrome');
});

gulp.task('test:watch', 'Run all tests in PhantomJS and watch', (done) => {
    runTests(done, false, 'PhantomJS');
});
// </editor-fold>

gulp.task('dependencies:docs', () => {
    return gulp.src([
        'node_modules/codemirror/lib/codemirror.js',
        'node_modules/jquery/dist/jquery.js',
        'node_modules/redux/dist/redux.js',
        'node_modules/react/dist/react.js',
        'node_modules/react-dom/dist/react-dom.js',
        'node_modules/react-redux/dist/react-redux.js',
        'node_modules/react-bootstrap/dist/react-bootstrap.js',
        'node_modules/underscore/underscore.js',
        'node_modules/moment/min/moment-with-locales.js',
        'node_modules/coveo-styleguide/dist/js/VaporSVG.js',
        'node_modules/reselect/dist/reselect.js',
        'node_modules/chosen-js/chosen.jquery.min.js',
    ])
        .pipe(concat('react-vapor.dependencies.js'))
        .pipe(gulp.dest('./docs/dependencies/'));
});

gulp.task('dependencies:prod', () => {
    return gulp.src([
        'node_modules/codemirror/lib/codemirror.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/redux/dist/redux.min.js',
        'node_modules/react/dist/react.min.js',
        'node_modules/react-dom/dist/react-dom.min.js',
        'node_modules/react-redux/dist/react-redux.min.js',
        'node_modules/react-bootstrap/dist/react-bootstrap.min.js',
        'node_modules/underscore/underscore-min.js',
        'node_modules/moment/min/moment-with-locales.min.js',
        'node_modules/coveo-styleguide/dist/js/VaporSVG.js',
        'node_modules/reselect/dist/reselect.js',
        'node_modules/chosen-js/chosen.jquery.min.js',
    ])
        .pipe(gulp.dest('./dist/dependencies/'))
        .pipe(concat('react-vapor.dependencies.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('dependencies:externals', () => {
    return gulp.src([
        'webpack.externals.js',
    ])
        .pipe(rename('react-vapor.webpack.externals.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('dependencies', ['dependencies:prod', 'dependencies:docs', 'dependencies:externals']);

gulp.task('default', 'Clean, and compile the project', (done) => {
    runSequence('clean:dist', 'ts:definitions', done);
});
