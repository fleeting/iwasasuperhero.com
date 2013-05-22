(function() {
  'use strict';

  module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        options: {
          separator: ';',
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        dist: {
          files: {
            'js/plugins.js': ['js/jquery-2.0.0.min.js', 'js/foundation.min.js', 'js/colorbox/jquery.colorbox-min.js']
          }
        }
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
          sourceMap: 'js/source-map.js.map'
        },
        dist: {
          files: {
            'js/plugins.min.js': ['js/plugins.js'],
            'js/app.min.js': ['js/app.js']
          }
        }
      },
      jshint: {
        files: ['gruntfile.js'],
        // configure JSHint (documented at http://www.jshint.com/docs/)
        options: {
          globals: {
            jQuery: true,
            console: true,
            module: true
          }
        }
      },
      less: {
        development: {
          files: {
            'css/style.css': 'css/style.less'
          }
        },
        production: {
          options: {
            yuicompress: true
          },
          files: {
            'css/style.min.css': 'css/style.less'
          }
        }
      },
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'concat', 'uglify']
      }
    });

    // Load libs
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Register the default tasks
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less']);
  };
}());