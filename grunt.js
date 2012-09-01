/*global module:false*/
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.initConfig({
    meta: {
      docsindex: '<!DOCTYPE html><html><head>' +
      '<script type="text/javascript" charset="utf-8" ' +
      'src="asserts/<%= docsStats.hash %>.js"></script>' +
      '</head><body></body></html>'
    },
    webpack: {
      docs: {
        src: "docs/lib/docs.js",
        publicPrefix: "asserts/",
        statsTarget: "docsStats",
        dest: "docs/asserts/[hash].js"
      }
    },
    clean: ['docs/asserts/**/*', 'docs/index.html'],
    concat: {
      docs: {
        src: ['<banner:meta.docsindex>'],
        dest: 'docs/index.html'
      }
    }
  });
  grunt.registerTask('default', ['clean', 'webpack', 'concat:docs']);
};
