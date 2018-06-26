//设置项目属性
fis.set('project.name','fis3');
fis.set('project.static','/static');
fis.set('project.files',['*.html','map.json', '/test/*']);

//模块化开发插件开启，设置为commonjs
fis.hook('commonjs',{
  baseUrl:'./modules',
  extList:['.js','.jsx','.coffee','.es']
});

//同名依赖
fis.match('/{node_modules, modules}/**', {
  isMod: true,
  useSameNameRequire: true
});

fis.match('*.html', {
  useMap:true,
  parser: fis.plugin('html-uri')
});

//配置lib
fis.match('/lib/**.js',{
  release:'${project.static}/$&'
});

// 允许你在 js 中直接 require css+文件
fis.match('*.{js,es}', {
  preprocessor: [
    fis.plugin('js-require-file'),
    fis.plugin('js-require-css', {
      mode: 'dependency'
    })
  ]
});
// ------ 配置图片压缩
fis.match('**.png', {
  optimizer: fis.plugin('png-compressor')
});

// ------ 配置lib
fis.match('/lib/**.js', {
  release: '${project.static}/$&'
});

// ------ 配置components
fis.match('/node_modules/**',{
  release: '${project.static}/$&'
});
fis.match('/node_modules/**.css', {
  isMod: true,
  release: '${project.static}/$&'
});
fis.match('/node_modules/**.js', {
  release: '${project.static}/$&'
});


// ------ 配置modules
fis.match('/modules/(**)',{
  release:'${project.static}/$1'
});

//配置css
fis.match(/^\/modules\/(.*\.scss)$/i,{
  parser: fis.plugin('node-sass',{
    include_paths:['modules/css','node_modules'] //加入文件查找目录
  })
});
fis.match(/^\/modules\/(.*\.(scss|less|css))$/i, {
  rExt: '.css',
  isMod: true,
  release: '${project.static}/$1',
  postprocessor: fis.plugin('autoprefixer')
});

/*fis.match(/^\/modules\/(.*\.css)$/i,{
 isMod:true,
 useMap:true,
 release:'${project.static}/$1'
 });*/
fis.match(/^\/modules\/(.*\.(?:png|jpg|gif))$/i,{
  release: '${project.static}/$1'
});

/*fis.match(/^\/modules\/(.*\.html)$/i,{
 postprocessor:fis.plugin('extras_uri')
 })*/

//配置js
fis.match(/^\/modules\/(.*\.es)$/i, {
  parser: fis.plugin('babel-5.x'),
  rExt: 'js',
  isMod: true,
  release: '${project.static}/$1'
});
fis.match(/^\/modules\/(.*\.js)$/i,{
  isMod:true,
  release:'${project.static}/$1'
});
/*************************打包规范*****************************/

// 因为是纯前段项目，依赖不能自动被加载进来，所以这里需要借助一个 loader 来完成，
// 注意：与后端结合的项目不需要此插件!!!
fis.match('::package', {
  // npm install [-g] fis3-postpackager-loader
  // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
  postpackager: fis.plugin('loader', {
    resourceType: 'commonJs',
    useInlineMap: true, // 资源映射表内嵌
    obtainScript: true
  })
});

// 禁用components
fis.unhook('components');
fis.hook('node_modules');


// 发布产品库
fis.media('prd-debug')
    .match('**.{es,js}', {
      optimizer: fis.plugin('uglify-js',{

      }),
      useHash: false
    })
    .match('*.min.js', {
      optimizer: null
    })
    .match('min.js',{
      optimizer: null
    })
    .match('::image', {
      useHash: false
    })
    .match('**.{scss,css}', {
      optimizer: fis.plugin('clean-css', {
        'keepBreaks': true //保持一个规则一个换行
      }),
      relative: true,
      useHash: false
    }).match('**', {
  deploy: [
    fis.plugin('skip-packed',{
      ignore: []
    }),
    fis.plugin('local-deliver',{
      to: 'dist'
    })
  ]
});
fis.hook('relative');
fis.match('**', { relative: true });