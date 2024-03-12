module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        uglify: {
            ugly: {
                files: {
                    'public/datetime-range-picker.min.js': ["source/**/*.js", "!source/**/moment.js"]
                }
            },
            bundle: {
                files: {
                    'public/datetime-range-picker.bundle.js': ["source/**/*.js"]
                }
            },
            momentjs: {
                files: {
                    'public/moment.min.js': ["source/moment.js"]
                }
            },
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    sourceMap: false,
                },
                files: {
                    "./public/datetime-range-picker.min.css": ["source/**/*.less"],
                    "./test/style.css": ["test/**/*.less"],
                },
            },
        },
        watch: {
            scripts: {
                files: ["source/**/*.js"],
                tasks: ["uglify"],
                options: {
                    spawn: true,
                    interrupt: true,
                },
            },
            styles: {
                files: ["source/**/*.less", "test/**/*.less"],
                tasks: ["less"],
                options: {
                    spawn: true,
                    interrupt: true,
                },
            },
        },
    });

    // Load the plugins
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");

    // Default task(s).
    grunt.registerTask("default", ["uglify", "less", "watch"]);
};