'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        express: {
            all: {
                options: {
                    bases: ['dist/'],
                    port: 8080,
                    hostname: "0.0.0.0",
                    livereload: true
                }
            }
        },

        open: {
            all: {
                path: 'http://localhost:8080/index.htm'
            }
        },

        growl : {
            sassCompile: {
                title: 'SASS COMPILE DONE!',
                message: 'By the way, you look terrific today. Have you been working out? I love that shirt!'
            },
            browserify: {
                title: 'BROWSERIFY COMPILE DONE!',
                message: 'boop'
            },
            fontsUpdate: {
                title: 'FONTS UPDATED',
                message: 'bork'
            }
        },

        browserify: {
            compile: {
                options: {
                    transform: ['reactify', 'stringify'],
                    browserifyOptions: {
                        standalone: 'Styleguide'
                    },
                    // these are handled by browserify-shim in package.json
                    exclude: ['react', 'flux', 'lodash', 'react/addons', 'jquery', 'moment',
                        'react-router']
                },
                files: [{
                    src: ['templates/_sg/styleguide.jsx'],
                    dest: 'dist/js/styleguide.js'
                }]
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: ['styles/**/*.{scss,sass}'],
                tasks: ['scsslint', 'sass', 'postcss','growl:sassCompile'],
                options: {
                    livereload: false
                }
            },
            partials: {
                files: ['templates/**/*.jsx', 'components/*.jsx', 'mixins/*.jsx'],
                tasks: ['browserify', 'growl:browserify']
            },
            fonts: {
                files: ['styles/fonts/**/*'],
                tasks: ['copy:fonts', 'growl:fontsUpdate']
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        sass: {
            options: {
                outputStyle: 'nested',
                sourceComments: false,
                includePaths: [
                    'bower_components',
                    'bower_components/compass-mixins/lib/',
                    'bower_components/bootstrap-sass-twbs/assets/stylesheets',
                    'bower_components/bootstrap-datepicker/css',
                    'bower_components/messenger/build/css',
                    'bower_components/bourbon/app/assets/stylesheets',
                    'bower_components/neat/app/assets/stylesheets',
                    'styles/sass'
                ],
            },
            dist: {
                expand: true,
                cwd: 'styles/sass',
                src: ['**/*.scss', '!**/_*.scss'],
                dest: 'dist/styles/css',
                ext: '.css'
            }
        },

        // Add vendor prefixed styles
        postcss: {
            options: {
                processors: [
                    require('autoprefixer-core')({browsers: 'last 2 versions'})
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist/styles/css/',
                    src: '{,*/}*.css',
                    dest: 'dist/styles/css/'
                }]
            }
        },

        copy: {
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    dest: 'dist',
                    src: [
                        'styles/fonts/{,*/}*.*'
                    ]
                }]
            },
            images: {
                files: [{
                    expand: true,
                    dest: 'dist',
                    src: [
                        'styles/images/{,*/}*.*'
                    ]
                }]
            },
            js: {
                files: [{
                    expand: true,
                    src: ['bower_components/jquery/dist/jquery.min.js',
                          'bower_components/highlightjs/highlight.pack.js',
                          'bower_components/easydropdown/jquery.easydropdown.min.js',
                          'bower_components/messenger/build/js/messenger.min.js',
                          'bower_components/bootstrap/js/modal.js',
                          'bower_components/react/react-with-addons.js',
                          'bower_components/js-beautify/js/lib/beautify.js',
                          'bower_components/js-beautify/js/lib/beautify-html.js',
                          'bower_components/jquery-ui/jquery-ui.min.js',
                          'bower_components/bootstrap/js/tooltip.js',
                          'bower_components/lodash/lodash.min.js',
                          'bower_components/bootstrap-datepicker/js/bootstrap-datepicker.js',
                          'lib/**'],
                    dest: 'dist/js/',
                    flatten: true
                }]
            },
            deploy: {
                files: [{
                    expand: true,
                    dest: '_site',
                    cwd: 'dist',
                    src: [
                        '**/*'
                    ]
                }]
            }
        },

        scsslint: {
            allFiles: [
                'styles/sass/**/*.scss',
            ],
            options: {
                config: '.scss-lint.yml',
                compact: true,
                colorizeOutput: true
            },
        },
        jest: {
            options: {
                config: 'tests/jest.json',
                coverage: true
            }
        },

        // Follow instructions here: https://www.npmjs.com/package/grunt-github-pages
        githubPages: {
            target: {
                options: {
                    // The default commit message for the gh-pages branch
                    commitMessage: 'push'
                },
                // The folder where your gh-pages repo is
                src: '_site'
            }
        }
    });

    // Runs tasks in harmony mode for node
    // Usage: grunt harmony:jest
    grunt.registerTask('harmony', function() {
        var done = this.async();
        // Specify tasks to run spawned
        var tasks = Array.prototype.slice.call(arguments, 0);
        grunt.util.spawn({
            // Use the existing node path
            cmd: process.execPath,
            // Add the flags and use process.argv[1] to get path to grunt bin
            args: ['--harmony', process.argv[1]].concat(tasks),
            // Print everything this process is doing to the parent stdio
            opts: { stdio: 'inherit' }
        }, done);
    });

    grunt.registerTask('test', ['harmony:jest']);

    grunt.registerTask('build', 'Builds.', ['scsslint', 'copy', 'browserify', 'sass', 'postcss']);
    grunt.registerTask('run', 'Builds and watches the style guide for changes.', ['build', 'watch']);
    grunt.registerTask('deploy', 'Deploys to github', ['build', 'copy:deploy', 'githubPages:target']);
    grunt.registerTask('server', ['express', 'open', 'watch']);
    grunt.registerTask('default', ['build']);
};
