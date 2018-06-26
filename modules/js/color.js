$(function() {
  console.log('colorjs');
// color link
  var cssStyle = $('#skinColor');
  // 换肤函数
  function changeStyle(name) {
    event.stopPropagation();
    cssStyle.attr('href', 'static/css/skins/skin' + name + '.css');
  }
  // 保存肤色
  

  // 设置本地存储
  function setStorage(sname, val) {
    window.localStorage.setItem(sname, val);
  }
  function getStorage(attr) {
    var str = window.localStorage.getItem(attr);
    return str;
  }
  // 访问本地存储
  var cssName = getStorage('skinName');

  if (cssName && cssName !== null) {
    cssStyle.attr('href', 'static/css/skins/skin' + cssName + '.css');
  } else {
      cssStyle.attr('href', 'static/css/skins/skinblue.css');
  }
  
  $('.skinchose li').on('click', function() {
      var name = $(this).attr('class');
      cssStyle.attr('href', 'static/css/skins/skin' + name + '.css');
      setStorage('skinName', name);
      // console.log(cssStyle.attr('href'))

  })
})();
