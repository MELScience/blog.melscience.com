// Imports
var path = require('path');

var del = require('del');
var runSequence = require('run-sequence');
var gulp = require('gulp');

var plugins = require('gulp-load-plugins')();



// Bower task
gulp.task("bower", function () {
    var bower_config;

    try {
        bower_config = require("./bower.json") || {};
    } catch (e) {
        bower_config = {};
    }

    var stream = plugins.bower().pipe(plugins.plumber()),
        overrides = bower_config.overrides;

    if (overrides == null) {
        return stream;
    }

    var separator = '/',
        root = overrides[":root"] || "./",
        memo_sep = {};

    stream.setMaxListeners(0);

    var type, package_name, package_obj, package_filters;

    var separate = function (path) {
        var sep;

        if (memo_sep[path] != null) {
            return memo_sep[path].slice();
        }

        if (typeof path === 'string') {
            sep = path.split(separator);
            if (sep[0] === '') { sep.shift(); }
            if (sep[sep.length-1] === '') {sep.pop();}
        }

        memo_sep[path] = sep;

        return sep.slice();
    };

    var resolvePath = function (path, relative) {
        var sep_path = separate(path),
            sep_relative = separate(relative),
            len = sep_relative.length,
            i = 0;

        while (i < len && sep_relative[i] != null) {
            if (sep_relative[i] === sep_path[0]) {
                sep_path.shift()
            } else {
                return path;
            }
            i++;
        }

        return sep_path.join(separator);
    };

    var movingFiles = function (package_obj, package_name, root, type, package_filters){
        var filter = plugins.filter(package_filters),
            relative = package_obj.relative;

        if (relative) {
            relative = path.join(package_name, relative);
        }

        stream
            .pipe(filter)
            .pipe(plugins.rename2(function (pathObj, filePath) {
                var file_name = pathObj.basename(filePath),
                    mask_name = package_obj.mask || "",
                    relative_path = null;

                if (relative) {
                    relative_path = resolvePath(filePath, relative);
                }

                if (mask_name != "") {
                    mask_name = mask_name.replace(/\{file_name\}/g, file_name);
                    mask_name = mask_name.replace(/\{package_name\}/g, package_name);
                    if (relative_path) {
                        mask_name = mask_name.replace(/\{relative_path\}/g, relative_path);
                    }
                } else {
                    mask_name = file_name;
                }

                mask_name = pathObj.join(type, mask_name);

                //plugins.util.log(["  Moving file: \'", filePath, "\' -> \'", path.join(root, mask_name), "\'"].join(''));

                return mask_name;
            }).on('error', plugins.util.log))
            .pipe(gulp.dest(root))
            .pipe(filter.restore())
    };

    for (type in overrides) {
        if (type[0] !== ':') {
            for (package_name in overrides[type]) {
                package_obj = overrides[type][package_name];

                if (package_obj.forEach == null) {
                    package_obj = [package_obj];
                }

                package_obj.forEach(function (package_obj) {
                    package_filters = package_obj.filter;
                    if (typeof package_filters === 'string') {
                        package_filters = [package_filters];
                    }
                    package_filters = package_filters.map(function (item) {
                        return path.join(package_name, item);
                    });

                    movingFiles(package_obj, package_name, root, type, package_filters);
                });
            }
        }
    }

    return stream;
});


// Coffee task
gulp.task('coffee', function() {
    return gulp.src('_assets/coffee/**/*.coffee')
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.coffee({
            bare: true
        }).on('error', plugins.util.log))
        .pipe(plugins.sourcemaps.write({
            includeContent: true
        }))
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest('_staticfiles/js/'))
        .pipe(plugins.livereload());
});


// Sass task
gulp.task('sass', function () {
    // postcss
    var autoprefixer = require('autoprefixer-core');
    var epub = require("postcss-epub");

    return gulp.src('_assets/scss/**/*.scss')
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass({
            errLogToConsole: true,
            style: 'expanded',
            includePaths: ['bower_components']
        }))
        .pipe(plugins.postcss([
            autoprefixer({browsers: ['> 1%', 'IE 9']}),
            epub
        ])).on('error', plugins.util.log)
        .pipe(plugins.sourcemaps.write({
            includeContent: true
        }))
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest('_staticfiles/css/'))
        .pipe(plugins.livereload());
});

// Js optimization
gulp.task('requirejs', function (done) {
    var requirejs = require('requirejs');

    requirejs.define('node/print', [], function() {
        return function print(msg) {
            if (msg.substring(0, 5) === 'Error') {
                plugins.util.log('RequireJS failed.');
            } else {
                plugins.util.log(msg);
            }
        };
    });

    requirejs.optimize({
        dir: "static/js/",
        baseUrl: "_staticfiles/js/",
        mainConfigFile: '_staticfiles/js/main.js',
        optimize: "uglify2",
        modules: [{
            name: 'almond',
            include: ['main']
        }]
    }, function (){
        done();
    });
});
// Css optimization
gulp.task("minifycss", function () {
    return gulp.src('_staticfiles/css/**/*.css')
        .pipe(plugins.plumber())
        .pipe(plugins['minifyCss']())
        .pipe(plugins.plumber.stop())
        .pipe(gulp.dest('static/css/'));
});

// Clean build dirrectory
gulp.task("clean", function (done) {
    del(['static/**/*'], done);
});
// Copy all files
gulp.task("copy", function () {
    return gulp.src([
        '_staticfiles/**/*',
        // Exclude js, css and img
        '!_staticfiles/js/**',
        '!_staticfiles/css/**'
    ]).pipe(gulp.dest('static'));
});

gulp.task('optimize', function(callback) {
    runSequence('clean', 'copy', 'minifycss', 'requirejs', callback);
});



// Watch tasks
gulp.task('watch', function () {
    gulp.start('coffee', 'sass', function (){
        plugins.livereload.listen();
    });

    gulp.watch(['_assets/coffee/**/*.coffee'], ['coffee']);
    gulp.watch(['_assets/scss/**/*.scss'], ['sass']);
    gulp.watch(['templates/**/*.html'], function () {
        gulp.src('templates/**/*.html', {read: false})
            .pipe(plugins.livereload());
    });
});


// Default task
gulp.task('default', function(callback) {
    runSequence('bower', ['sass', 'coffee'], 'optimize', callback);
})