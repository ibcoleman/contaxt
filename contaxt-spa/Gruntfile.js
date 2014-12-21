module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bower: {
            install: {
                // just run grunt bower:install
            }
        },
        wiredep: {
            task: {
                src: [
                    'app/assets/**/*.html',   // .html support...
                    'app/assets/**/*.jade',   // .jade support...
                    'app/styles/main.scss',  // .scss & .sass support...
                    'app/config.yml'         // and .yml & .yaml support out of the box!
                ],

                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-wiredep');

    // Default task(s).
    grunt.registerTask('default', []);

};