'use strict';
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');


var sass = require('gulp-sass');

var imageMin = require('gulp-imagemin');
var replace = require('gulp-replace');//文本替换

var apiPath = 'http://10.0.0.108'

/**
 * 将页面中的 http://localhost  替换为 http://域名:端口号
 */
gulp.task('replaceTask', async function(){
  await gulp.src(['src/*.html','src/**/*.html'])
    .pipe(replace(/http:\/\/localhost/gi,apiPath))
    .pipe(gulp.dest('dist'));
});

//编译scss文件为css
gulp.task('sass',async function(){
    await gulp.src('src/static/scss/**/*.scss') //*表示所有的scss文件
        .pipe(sass())
        .pipe(gulp.dest('src/static/css'))
})

//监听scss文件变化
gulp.task('watch',function(){
    gulp.watch('src/static/scss/**/*.scss',gulp.series('sass', async function() {

    }));
})

//压缩html
gulp.task('html', gulp.series('replaceTask', async function() {
    // Do something after a, b, and c are finished.
    }),async function(){
        await gulp.src(['src/*.html','src/**/*.html'])
            .pipe(htmlmin({
                collapseWhitespace: true,//压缩HTML
                removeComments: true,//清除HTML注释
                removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
                removeStyleLinkTypeAttributes: true,//删除<link>的type="text/css"
                minifyJS: true,//压缩页面JS
                minifyCSS: true//压缩页面CSS
            }))
            .pipe(gulp.dest('dist'));
});


//压缩css
gulp.task('style', async function(){
    await gulp.src(['src/static/css/**/*.css'])
        .pipe(cssnano())
        .pipe(gulp.dest('dist/static/css'));
});

//压缩js
gulp.task('script', async function(){
    await gulp.src(['src/static/js/**/*.js'])
        .pipe(uglify({
            mangle: false// 跳过函数名，使其不被压缩，函数名也压缩可改为true
        }))
        .pipe(gulp.dest('dist/static/js'));
});
//压缩图片
gulp.task('image-min',async function(){
    await gulp.src(['src/static/images/*.*','src/static/images/**/*.*'])
        .pipe(imageMin({progressive: true}))
        .pipe(gulp.dest('dist/static/images'))
})

//图片转移
gulp.task('image',async function(){
    await gulp.src(['src/static/images/*.*','src/static/images/**/*.*'])
        .pipe(gulp.dest('dist/static/images'))
})


gulp.task("build", gulp.series('html', 'style','script','image', async function() {
    // Do something after a, b, and c are finished.
}));

gulp.task('default', gulp.series('watch', async function(){

}))


gulp.task('dev', async function(){
    await gulp.watch('src/static/scss/**/*.scss',gulp.series('sass', async function() {

    }));
    await gulp.watch('src',gulp.series('build', async function(){

    }))
})