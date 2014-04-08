module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /*------------------------------*\
        Watch
    \*------------------------------*/
    watch: {
      css: {
        files: ['*.css', '**/*.html'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    },

  });

  // Load the plugins that provide the tasks
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['watch']);

};
