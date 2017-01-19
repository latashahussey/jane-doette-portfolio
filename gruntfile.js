
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true;
            },
            dev: {
                src: ['/src/js/**/*.js']
            }
        }
    });



    grunt.loadNpmTasks('grunt-contrib-jshint');

    // task setup
    grunt.registerTask('default', ['jshint']);
};