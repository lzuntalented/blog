fis.match('src/**.js',{
// fis-optimizer-uglify-js 插件进行压缩，已内置
	optimizer: fis.plugin('uglify-js')
});
fis.match('src/**.js',{
	useHash: true
});
fis.match('*.jpg',{
	useHash: true
});
fis.match('dist',{
	release : false,
});