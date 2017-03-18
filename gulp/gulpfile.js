
var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
gulp.task('test',function(){
    console.log('aaa');
});
gulp.task('test1',function(){
    console.log('bbb');
});
gulp.task('test2', ['test','test1']);

gulp.task('copy-img',function(){
    gulp.src(['src/imges/**/*.{jpg,png}','!src/imges/4.jpg']).pipe(gulp.dest('dist/image'));
});

gulp.task('sass',function(){
    gulp.src('src/sass/*.scss').pipe(sass({outputStyle:'expended'})).pipe(gulp.dest('dist/css'));
});
gulp.task('watch-html',function(){
    gulp.watch('index.html',['copy-html']);
});
gulp.task('copy-html',function(){
    gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());//src找到源文件 pipes是个管道
});
gulp.task('server',function(){
    connect.server({
        root:'dist',
        livereload:true
    })
});
gulp.task('default',['server','watch-html']);

gulp.task('watch-sass',function(){
    gulp.watch('sass/indec.scss',['copy-html']);
});