module.exports = function(grunt) {

  grunt.initConfig({
    /* Should not be used in production */
    'http-server': {
      dev: {
        root: 'static',
        port: 4041,
        host: 'localhost',
        runInBackground: true
      }
    },

    browserify: {
      client: {
        options: {
          debug: true
        },
        src: 'client/scripts/app.js',
        dest: 'static/scripts/app.js'
      }
    },

    sass: {
      dist: {
        files: [{
          'static/styles/index.css': 'client/styles/index.scss'
        }]
      }
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'static',
            src: ['**'],
            dest: 'app/www/'
          }
        ]
      }
    },

    watch: {
      js: {
        files: 'client/scripts/**/*.js',
        tasks: ['browserify'],
        options: {
          livereload: true
        }
      },
      scss: {
        files: 'client/styles/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['static/**/*.html'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['browserify', 'sass']);
  grunt.registerTask('phonegap', ['copy']);
  grunt.registerTask('default', ['http-server', 'build', 'watch']);
};
