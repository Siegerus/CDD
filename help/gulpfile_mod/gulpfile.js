const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
/* const autoprefixer = require('gulp-autoprefixer'); */
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "dist"
        },
        browser: 'chrome'
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
    //gulp.watch("src/sass/**/*.+(scss|sass)").on('change', browserSync.reload); // если запускать без 'styles'
});

gulp.task('styles', function() {
    return gulp.src("src/sass/**/*.+(scss|sass)")   //компилируются файлы, котрые заканчиваются на "(scss|sass)"
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        /* .pipe(autoprefixer()) */
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))                // куда складывается файл
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles')); // гулп следит за изменением всех файлов "(scss|sass)"// И если какойто файл будет изменён, то снова запуститься 'styles'.Также на всяких случай добавили "css", что бы если в папку попадёт такой файл, что бы он тоже компилировался.
    gulp.watch("src/*.html").on('change', gulp.parallel('html')); // по аналогии, при изменениях будет выполняться задача 'html'.
});    
                                                                    
gulp.task('html', function () {       // задаём саму задачу
    return gulp.src("src/*.html")     // берёться любой файл "html" из папки "src"
        .pipe(htmlmin({collapseWhitespace:true})) // ".pipe" - что будем делать с файлом. Дальше строка из документации с плагином. 
        .pipe(gulp.dest("dist/")); 
});

gulp.task('scripts', function () {      // Задача которая будет переносить все скрипты в папку "dist".
    return gulp.src("src/js/**/*.js")  // в папке "js". Дальше "**" - значит из любой папки в папке "js". Будет браться любой файл с раширением js - *.js
        .pipe(gulp.dest("dist/js"));      // и кладём в dist в папку js.
});

gulp.task('fonts', function () {      //  По аналогии перемещаем шрифты
    return gulp.src("src/fonts/**/*")  // 
        .pipe(gulp.dest("dist/fonts"));      // 
});

gulp.task('icons', function () {      //  Иконки
    return gulp.src("src/icons/**/*")  // 
        .pipe(gulp.dest("dist/icons"));      // 
});

gulp.task('mailer', function () {      //  Мейлер
    return gulp.src("src/mailer/**/*")  // 
        .pipe(gulp.dest("dist/mailer"));      // 
});

gulp.task('images', function () {      //  Картинки
    return gulp.src("src/img/**/*")  // 
        .pipe(imagemin())               // Пропускаем ещё через плагин сжатия
        .pipe(gulp.dest("dist/img"));      // 
});



gulp.task('default', gulp.parallel('watch', 'styles', 'scripts', 'fonts', 'icons', 'mailer', 'html', 'images', 'server'));