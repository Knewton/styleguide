'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        growl : {
            sassCompile : {
                title : 'SASS COMPILE DONE!',
                message : 'By the way, you look terrific today. Have you been working out? I love that shirt!'
            },
            dustCompile : {
                title : 'DUST COMPILE DONE!',
                message : 'boop'
            },
            fontsUpdate: {
                title : 'FONTS UPDATED',
                message : 'bork'
            }
        },

        dust: {
            compile: {
                files: [
                    {
                        "dist/js/templates.js": 'templates/**/*.dust'
                    }
                ],
                options: {
                    wrapper: false,
                    runtime: false,
                    relative: true,
                    basePath: 'templates/'
                }
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            compass: {
                files: ['styles/**/*.{scss,sass}'],
                tasks: ['scsslint', 'compass', 'autoprefixer','growl:sassCompile'],
                options: {
                    livereload: true
                }
            },
            partials: {
                files: ['templates/**/*.dust'],
                tasks: ['dust:compile', 'growl:dustCompile']
            },
            fonts: {
                files: ['styles/fonts/**/*'],
                tasks: ['copy:fonts', 'growl:fontsUpdate']
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: 'styles/sass',
                cssDir: 'dist/styles/css',
                generatedImagesDir: 'dist/styles/css/images/generated',
                javascriptsDir: 'scripts',
                importPath: ['bower_components',
                             'bower_components/bootstrap-sass-twbs/assets/stylesheets',
                             'bower_components/bourbon/dist',
                             'bower_components/neat/app/assets/stylesheets'],
                relativeAssets: false,
                assetCacheBuster: false,
                debugInfo: false,
                outputStyle: 'compact'
            },
            dist: {
                options: {
                    generatedImagesDir: 'dist/styles/css/images/generated'
                }
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles/',
                    src: '{,*/}*.css',
                    dest: 'styles/'
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
                          'bower_components/dustjs-linkedin/dist/dust-core.js',
                          'bower_components/dustjs-linkedin-helpers/dist/dust-helpers.js'],
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

    grunt.registerTask('build', 'Builds.', ['scsslint', 'copy', 'dust', 'compass']);
    grunt.registerTask('run', 'Builds and watches the style guide for changes.', ['build', 'watch']);
    grunt.registerTask('deploy', 'Deploys to github', ['build', 'copy:deploy', 'githubPages:target']);

};
