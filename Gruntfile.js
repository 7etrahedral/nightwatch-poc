/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    concat: {
      dockerchrome: {
        src: ['./node_modules/bizzy-nightwatch-base-page/lib/browser-config/docker-chrome-conf.js'],
        dest: 'docker-chrome-conf.js',
      },
    },
  });

  grunt.registerTask('default', ['concat']);
};
