module.exports = function () {
	$.gulp.task('bsync', () => {
		$.browserSync.init({
			server: {
				baseDir: './dist',
				browser: "chrome",
			},
			notify: false,
			open: false,
			// online: false, // Work offline without internet connection
			// tunnel: true, tunnel: 'zaurmag', // Demonstration page: http://projectname.localtunnel.me
		})
	})
}
