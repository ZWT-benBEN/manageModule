//插件模块化
var jQuery, $;
jQuery = $ = require('jquery/dist/jquery');
window.jQuery = jQuery;
// 弹出框
var dialogBox = {
  init:function(e,op){
    require(['jquery','js/jquery.dialogBox'],function($, dialogBox){
      $(e).dialogBox(op);
    })
  }
}

// SuperSlide
var Slide = {
  init: function (e,op) {
    require(['jquery', 'js/jquery.SuperSlide.2.1.1'], function ($, slide) {
      $(e).slide(op);
      console.log(slide)
    })
  }
}
// Pikaday
var Datepicker = {
  init: function (op) {
    require(['pikaday/pikaday'], function (Pikaday) {
      var picker = new Pikaday(op);
    })
  }
}
function showitem(con){
  alert(1)
  var item =  $(this).find(con);
  item.addClass('show')
}

exports.Slide = Slide;
exports.Datepicker = Datepicker;
exports.dialogBox = dialogBox;
/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <abdullah@almsaeedstudio.com>
 * @version 2.3.8
 * @license MIT <http://opensource.org/licenses/MIT>
 */

//Make sure jQuery has been loaded before app.js
if (typeof jQuery === "undefined") {
  throw new Error("AdminLTE requires jQuery");
}

/* AdminLTE
 *
 * @type Object
 * @description $.AdminLTE is the main object for the template's app.
 *              It's used for implementing functions and options related
 *              to the template. Keeping everything wrapped in an object
 *              prevents conflict with other plugins and is a better
 *              way to organize our code.
 */
$.AdminLTE = {};

/* --------------------
 * - AdminLTE Options -
 * --------------------
 * Modify these options to suit your implementation
 */
/*$('.fa-angle-left').AdminLTE({
  animationSpeed:0
})*/
$.AdminLTE.options = {
  //Add slimscroll to navbar menus
  //This requires you to load the slimscroll plugin
  //in every page before app.js
  navbarMenuSlimscroll: true,
  navbarMenuSlimscrollWidth: "3px", //The width of the scroll bar
  navbarMenuHeight: "200px", //The height of the inner menu
  //General animation speed for JS animated elements such as box collapse/expand and
  //sidebar treeview slide up/down. This option accepts an integer as milliseconds,
  //'fast', 'normal', or 'slow'
  animationSpeed: 300,
  //Sidebar push menu toggle button selector
  sidebarToggleSelector: "[data-toggle='offcanvas']",
  //Activate sidebar push menu
  sidebarPushMenu: true,
  //Activate sidebar slimscroll if the fixed layout is set (requires SlimScroll Plugin)
  sidebarSlimScroll: true,
  //Enable sidebar expand on hover effect for sidebar mini
  //This option is forced to true if both the fixed layout and sidebar mini
  //are used together
  sidebarExpandOnHover: false,
  //BoxRefresh Plugin
  enableBoxRefresh: true,
  //Bootstrap.js tooltip
  enableBSToppltip: true,
  BSTooltipSelector: "[data-toggle='tooltip']",
  //Enable Fast Click. Fastclick.js creates a more
  //native touch experience with touch devices. If you
  //choose to enable the plugin, make sure you load the script
  //before AdminLTE's app.js
  enableFastclick: false,
  //Control Sidebar Tree views
  enableControlTreeView: true,
  //Control Sidebar Options
  enableControlSidebar: true,
  controlSidebarOptions: {
    //Which button should trigger the open/close event
    toggleBtnSelector: "[data-toggle='control-sidebar']",
    //The sidebar selector
    selector: ".control-sidebar",
    //Enable slide over content
    slide: true
  },
  //Box Widget Plugin. Enable this plugin
  //to allow boxes to be collapsed and/or removed
  enableBoxWidget: true,
  //Box Widget plugin options
  boxWidgetOptions: {
    boxWidgetIcons: {
      //Collapse icon
      // collapse: 'fa-minus',
      //Open icon
      /*open: 'fa-plus',
      //Remove icon
      remove: 'fa-times'*/
    },
    boxWidgetSelectors: {
      //Remove button selector
      remove: '[data-widget="remove"]',
      //Collapse button selector
      collapse: '[data-widget="collapse"]'
    }
  },
  //Direct Chat plugin options
  directChat: {
    //Enable direct chat by default
    enable: true,
    //The button to open and close the chat contacts pane
    contactToggleSelector: '[data-widget="chat-pane-toggle"]'
  },
  //Define the set of colors to use globally around the website
  colors: {
    lightBlue: "#3c8dbc",
    red: "#f56954",
    green: "#00a65a",
    aqua: "#00c0ef",
    yellow: "#f39c12",
    blue: "#0073b7",
    navy: "#001F3F",
    teal: "#39CCCC",
    olive: "#3D9970",
    lime: "#01FF70",
    orange: "#FF851B",
    fuchsia: "#F012BE",
    purple: "#8E24AA",
    maroon: "#D81B60",
    black: "#222222",
    gray: "#d2d6de"
  },
  //The standard screen sizes that bootstrap uses.
  //If you change these in the variables.less file, change
  //them here too.
  screenSizes: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200
  }
};

/* ------------------
 * - Implementation -
 * ------------------
 * The next block of code implements AdminLTE's
 * functions and plugins as specified by the
 * options above.
 */
$(function () {
  "use strict";

  //Fix for IE page transitions
  $("body").removeClass("hold-transition");

  //Extend options if external options exist
  if (typeof AdminLTEOptions !== "undefined") {
    $.extend(true,
        $.AdminLTE.options,
        AdminLTEOptions);
  }

  //Easy access to options
  var o = $.AdminLTE.options;

  //Set up the object
  _init();

  //Activate the layout maker
  $.AdminLTE.layout.activate();

  //Enable sidebar tree view controls
  if (o.enableControlTreeView) {
    $.AdminLTE.tree('.sidebar');
  }

  //Enable control sidebar
  if (o.enableControlSidebar) {
    $.AdminLTE.controlSidebar.activate();
  }

  //Add slimscroll to navbar dropdown
  if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
    $(".navbar .menu").slimscroll({
      height: o.navbarMenuHeight,
      alwaysVisible: false,
      size: o.navbarMenuSlimscrollWidth
    }).css("width", "100%");
  }

  //Activate sidebar push menu
  if (o.sidebarPushMenu) {
    $.AdminLTE.pushMenu.activate(o.sidebarToggleSelector);
  }

  //Activate Bootstrap tooltip
  if (o.enableBSToppltip) {
    $('body').tooltip({
      selector: o.BSTooltipSelector,
      container: 'body'
    });
  }

  //Activate box widget
  if (o.enableBoxWidget) {
    $.AdminLTE.boxWidget.activate();
  }

  //Activate fast click
  if (o.enableFastclick && typeof FastClick != 'undefined') {
    FastClick.attach(document.body);
  }

  //Activate direct chat widget
  if (o.directChat.enable) {
    $(document).on('click', o.directChat.contactToggleSelector, function () {
      var box = $(this).parents('.direct-chat').first();
      box.toggleClass('direct-chat-contacts-open');
    });
  }

  /*
   * INITIALIZE BUTTON TOGGLE
   * ------------------------
   */
  $('.btn-group[data-toggle="btn-toggle"]').each(function () {
    var group = $(this);
    $(this).find(".btn").on('click', function (e) {
      group.find(".btn.active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });

  });
});

/* ----------------------------------
 * - Initialize the AdminLTE Object -
 * ----------------------------------
 * All AdminLTE functions are implemented below.
 */
function _init() {
  'use strict';
  /* Layout
   * ======
   * Fixes the layout height in case min-height fails.
   *
   * @type Object
   * @usage $.AdminLTE.layout.activate()
   *        $.AdminLTE.layout.fix()
   *        $.AdminLTE.layout.fixSidebar()
   */
  $.AdminLTE.layout = {
    activate: function () {
      var _this = this;
      _this.fix();
      _this.fixSidebar();
      // $('body, html, .wrapper').css('height', 'auto');
      $(window, ".wrapper").resize(function () {
        _this.fix();
        _this.fixSidebar();
      });
    },
    fix: function () {
      // Remove overflow from .wrapper if layout-boxed exists
      $(".layout-boxed > .wrapper").css('overflow', 'hidden');
      //Get window height and the wrapper height
      var footer_height = $('.main-footer').outerHeight() || 0;
      var neg = $('.main-header').outerHeight() + footer_height;
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height() || 0;
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if ($("body").hasClass("fixed")) {
        $(".content-wrapper, .right-side").css('height', window_height - footer_height);
      } else {
        var postSetWidth;
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $(".content-wrapper, .right-side").css('height', sidebar_height);
          postSetWidth = sidebar_height;
        }

        //Fix for the control sidebar height
        var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
        if (typeof controlSidebar !== "undefined") {
          if (controlSidebar.height() > postSetWidth)
            $(".content-wrapper, .right-side").css('height', controlSidebar.height());
        }

      }
    },
    fixSidebar: function () {
      //Make sure the body tag has the .fixed class
      if (!$("body").hasClass("fixed")) {
        if (typeof $.fn.slimScroll != 'undefined') {
          $(".sidebar").slimScroll({destroy: true}).height("auto");
        }
        return;
      } else if (typeof $.fn.slimScroll == 'undefined' && window.console) {
        window.console.error("Error: the fixed layout requires the slimscroll plugin!");
      }
      //Enable slimscroll for fixed layout
      if ($.AdminLTE.options.sidebarSlimScroll) {
        if (typeof $.fn.slimScroll != 'undefined') {
          //Destroy if it exists
          $(".sidebar").slimScroll({destroy: true}).height("auto");
          //Add slimscroll
          $(".sidebar").slimScroll({
            height: ($(window).height() - $(".main-header").height()) + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
          });
        }
      }
    }
  };

  /* PushMenu()
   * ==========
   * Adds the push menu functionality to the sidebar.
   *
   * @type Function
   * @usage: $.AdminLTE.pushMenu("[data-toggle='offcanvas']")
   */
  $.AdminLTE.pushMenu = {
    activate: function (toggleBtn) {
      //Get the screen sizes
      var screenSizes = $.AdminLTE.options.screenSizes;

      //Enable sidebar toggle
      $(document).on('click', toggleBtn, function (e) {
        e.preventDefault();

        //Enable sidebar push menu
        if ($(window).width() > (screenSizes.sm - 1)) {
          if ($("body").hasClass('sidebar-collapse')) {
            $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
          } else {
            $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
          }
        }
        //Handle sidebar push menu for small screens
        else {
          if ($("body").hasClass('sidebar-open')) {
            $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
          } else {
            $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
          }
        }
      });

      $(".content-wrapper").click(function () {
        //Enable hide menu when clicking on the content-wrapper on small screens
        if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
          $("body").removeClass('sidebar-open');
        }
      });

      //Enable expand on hover for sidebar mini
      if ($.AdminLTE.options.sidebarExpandOnHover
          || ($('body').hasClass('fixed')
          && $('body').hasClass('sidebar-mini'))) {
        this.expandOnHover();
      }
    },
    expandOnHover: function () {
      var _this = this;
      var screenWidth = $.AdminLTE.options.screenSizes.sm - 1;
      //Expand sidebar on hover
      $('.main-sidebar').hover(function () {
        if ($('body').hasClass('sidebar-mini')
            && $("body").hasClass('sidebar-collapse')
            && $(window).width() > screenWidth) {
          _this.expand();
        }
      }, function () {
        if ($('body').hasClass('sidebar-mini')
            && $('body').hasClass('sidebar-expanded-on-hover')
            && $(window).width() > screenWidth) {
          _this.collapse();
        }
      });
    },
    expand: function () {
      $("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
    },
    collapse: function () {
      if ($('body').hasClass('sidebar-expanded-on-hover')) {
        $('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
      }
    }
  };

  /* Tree()
   * ======
   * Converts the sidebar into a multilevel
   * tree view menu.
   *
   * @type Function
   * @Usage: $.AdminLTE.tree('.sidebar')
   */
  $.AdminLTE.tree = function (menu) {
    var _this = this;
    var animationSpeed = $.AdminLTE.options.animationSpeed;
    $(document).off('click', menu + ' li a')
        .on('click', menu + ' li a', function (e) {
          //Get the clicked link and the next element
          var $this = $(this);
          var checkElement = $this.next();

          //Check if the next element is a menu and is visible
          if ((checkElement.is('.treeview-menu')) && (checkElement.is(':visible')) && (!$('body').hasClass('sidebar-collapse'))) {
            //Close the menu
            checkElement.slideUp(animationSpeed, function () {
              checkElement.removeClass('menu-open');
              //Fix the layout in case the sidebar stretches over the height of the window
              //_this.layout.fix();
            });
            checkElement.parent("li").removeClass("active");
          }
          //If the menu is not visible
          else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
            //Get the parent menu
            var parent = $this.parents('ul').first();
            //Close all open menus within the parent
            var ul = parent.find('ul:visible').slideUp(animationSpeed);
            //Remove the menu-open class from the parent
            ul.removeClass('menu-open');
            //Get the parent li
            var parent_li = $this.parent("li");

            //Open the target menu and add the menu-open class
            checkElement.slideDown(animationSpeed, function () {
              //Add the class active to the parent li
              checkElement.addClass('menu-open');
              parent.find('li.active').removeClass('active');
              parent_li.addClass('active');
              //Fix the layout in case the sidebar stretches over the height of the window
              _this.layout.fix();
            });
          }
          //if this isn't a link, prevent the page from being redirected
          if (checkElement.is('.treeview-menu')) {
            e.preventDefault();
          }
        });
  };

  /* ControlSidebar
   * ==============
   * Adds functionality to the right sidebar
   *
   * @type Object
   * @usage $.AdminLTE.controlSidebar.activate(options)
   */
  $.AdminLTE.controlSidebar = {
    //instantiate the object
    activate: function () {
      //Get the object
      var _this = this;
      //Update options
      var o = $.AdminLTE.options.controlSidebarOptions;
      //Get the sidebar
      var sidebar = $(o.selector);
      //The toggle button
      var btn = $(o.toggleBtnSelector);

      //Listen to the click event
      btn.on('click', function (e) {
        e.preventDefault();
        //If the sidebar is not open
        if (!sidebar.hasClass('control-sidebar-open')
            && !$('body').hasClass('control-sidebar-open')) {
          //Open the sidebar
          _this.open(sidebar, o.slide);
        } else {
          _this.close(sidebar, o.slide);
        }
      });

      //If the body has a boxed layout, fix the sidebar bg position
      var bg = $(".control-sidebar-bg");
      _this._fix(bg);

      //If the body has a fixed layout, make the control sidebar fixed
      if ($('body').hasClass('fixed')) {
        _this._fixForFixed(sidebar);
      } else {
        //If the content height is less than the sidebar's height, force max height
        if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
          _this._fixForContent(sidebar);
        }
      }
    },
    //Open the control sidebar
    open: function (sidebar, slide) {
      //Slide over content
      if (slide) {
        sidebar.addClass('control-sidebar-open');
      } else {
        //Push the content by adding the open class to the body instead
        //of the sidebar itself
        $('body').addClass('control-sidebar-open');
      }
    },
    //Close the control sidebar
    close: function (sidebar, slide) {
      if (slide) {
        sidebar.removeClass('control-sidebar-open');
      } else {
        $('body').removeClass('control-sidebar-open');
      }
    },
    _fix: function (sidebar) {
      var _this = this;
      if ($("body").hasClass('layout-boxed')) {
        sidebar.css('position', 'absolute');
        sidebar.height($(".wrapper").height());
        if (_this.hasBindedResize) {
          return;
        }
        $(window).resize(function () {
          _this._fix(sidebar);
        });
        _this.hasBindedResize = true;
      } else {
        sidebar.css({
          'position': 'fixed',
          'height': 'auto'
        });
      }
    },
    _fixForFixed: function (sidebar) {
      sidebar.css({
        'position': 'fixed',
        'max-height': '100%',
        'overflow': 'auto',
        'padding-bottom': '50px'
      });
    },
    _fixForContent: function (sidebar) {
      $(".content-wrapper, .right-side").css('height', sidebar.height());
    }
  };

  /* BoxWidget
   * =========
   * BoxWidget is a plugin to handle collapsing and
   * removing boxes from the screen.
   *
   * @type Object
   * @usage $.AdminLTE.boxWidget.activate()
   *        Set all your options in the main $.AdminLTE.options object
   */
  $.AdminLTE.boxWidget = {
    selectors: $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
    icons: $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
    animationSpeed: $.AdminLTE.options.animationSpeed,
    activate: function (_box) {
      var _this = this;
      if (!_box) {
        _box = document; // activate all boxes per default
      }
      //Listen for collapse event triggers
      $(_box).on('click', _this.selectors.collapse, function (e) {
        e.preventDefault();
        _this.collapse($(this));
      });

      //Listen for remove event triggers
      $(_box).on('click', _this.selectors.remove, function (e) {
        e.preventDefault();
        _this.remove($(this));
      });
    },
    collapse: function (element) {
      var _this = this;
      //Find the box parent
      var box = element.parents(".box").first();
      //Find the body and the footer
      var box_content = box.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
      if (!box.hasClass("collapsed-box")) {
        //Convert minus into plus
        element.children(":first")
            .removeClass(_this.icons.collapse)
            .addClass(_this.icons.open);
        //Hide the content
        box_content.slideUp(_this.animationSpeed, function () {
          box.addClass("collapsed-box");
        });
      } else {
        //Convert plus into minus
        element.children(":first")
            .removeClass(_this.icons.open)
            .addClass(_this.icons.collapse);
        //Show the content
        box_content.slideDown(_this.animationSpeed, function () {
          box.removeClass("collapsed-box");
        });
      }
    },
    remove: function (element) {
      //Find the box parent
      var box = element.parents(".box").first();
      box.slideUp(this.animationSpeed);
    }
  };
}

/* ------------------
 * - Custom Plugins -
 * ------------------
 * All custom plugins are defined below.
 */

/*
 * BOX REFRESH BUTTON
 * ------------------
 * This is a custom plugin to use with the component BOX. It allows you to add
 * a refresh button to the box. It converts the box's state to a loading state.
 *
 * @type plugin
 * @usage $("#box-widget").boxRefresh( options );
 */
(function ($) {

  "use strict";

  $.fn.boxRefresh = function (options) {

    // Render options
    var settings = $.extend({
      //Refresh button selector
      trigger: ".refresh-btn",
      //File source to be loaded (e.g: ajax/src.php)
      source: "",
      //Callbacks
      onLoadStart: function (box) {
        return box;
      }, //Right after the button has been clicked
      onLoadDone: function (box) {
        return box;
      } //When the source has been loaded

    }, options);

    //The overlay
    var overlay = $('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');

    return this.each(function () {
      //if a source is specified
      if (settings.source === "") {
        if (window.console) {
          window.console.log("Please specify a source first - boxRefresh()");
        }
        return;
      }
      //the box
      var box = $(this);
      //the button
      var rBtn = box.find(settings.trigger).first();

      //On trigger click
      rBtn.on('click', function (e) {
        e.preventDefault();
        //Add loading overlay
        start(box);

        //Perform ajax call
        box.find(".box-body").load(settings.source, function () {
          done(box);
        });
      });
    });

    function start(box) {
      //Add overlay and loading img
      box.append(overlay);

      settings.onLoadStart.call(box);
    }

    function done(box) {
      //Remove overlay and loading img
      box.find(overlay).remove();

      settings.onLoadDone.call(box);
    }

  };

})(jQuery);

/*
 * EXPLICIT BOX CONTROLS
 * -----------------------
 * This is a custom plugin to use with the component BOX. It allows you to activate
 * a box inserted in the DOM after the app.js was loaded, toggle and remove box.
 *
 * @type plugin
 * @usage $("#box-widget").activateBox();
 * @usage $("#box-widget").toggleBox();
 * @usage $("#box-widget").removeBox();
 */
(function ($) {

  'use strict';

  $.fn.activateBox = function () {
    $.AdminLTE.boxWidget.activate(this);
  };

  $.fn.toggleBox = function () {
    var button = $($.AdminLTE.boxWidget.selectors.collapse, this);
    $.AdminLTE.boxWidget.collapse(button);
  };

  $.fn.removeBox = function () {
    var button = $($.AdminLTE.boxWidget.selectors.remove, this);
    $.AdminLTE.boxWidget.remove(button);
  };

})(jQuery);

/*
 * TODO LIST CUSTOM PLUGIN
 * -----------------------
 * This plugin depends on iCheck plugin for checkbox and radio inputs
 *
 * @type plugin
 * @usage $("#todo-widget").todolist( options );
 */
(function ($) {

  'use strict';

  $.fn.todolist = function (options) {
    // Render options
    var settings = $.extend({
      //When the user checks the input
      onCheck: function (ele) {
        return ele;
      },
      //When the user unchecks the input
      onUncheck: function (ele) {
        return ele;
      }
    }, options);

    return this.each(function () {

      if (typeof $.fn.iCheck != 'undefined') {
        $('input', this).on('ifChecked', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onCheck.call(ele);
        });

        $('input', this).on('ifUnchecked', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          settings.onUncheck.call(ele);
        });
      } else {
        $('input', this).on('change', function () {
          var ele = $(this).parents("li").first();
          ele.toggleClass("done");
          if ($('input', ele).is(":checked")) {
            settings.onCheck.call(ele);
          } else {
            settings.onUncheck.call(ele);
          }
        });
      }
    });
  };
}(jQuery));


//mainTime

var home_time={1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'日'}
var date = new Date();
var year = date.getFullYear();
var mouth = date.getMonth()+1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var week = date.getDay();
for(var k in home_time){
  if(week ==k){
    var newweek = home_time[k]
    $('.home_week').html('星期'+newweek)
  }
}
$('.home_year').html(year + '年'+ mouth + '月'+ day + '日');
if(hours<10){
    if(minutes<10){
        $('.home_hour').html('0'+hours+':'+'0'+minutes);
      $('.rem_time').val(year + '年'+ mouth + '月'+ day + '日'+'0'+ ' '+hours+':'+'0'+minutes);
    }else{
        $('.home_hour').html('0'+hours+':'+minutes);
        $('.rem_time').val(year + '年'+ mouth + '月'+ day + '日'+'0'+ ' '+hours+':'+minutes);
    }
}else{
    if(minutes<10){
        $('.home_hour').html(hours+':'+'0'+minutes);
        $('.rem_time').val(year + '年'+ mouth + '月'+ day + '日'+ ' '+hours+':'+'0'+minutes);
    }else{
        $('.home_hour').html(hours+':'+minutes);
        $('.rem_time').val(year + '年'+ mouth + '月'+ day + '日'+ ' '+hours+':'+minutes);
    }
}

// 全选
function check_all(table){
  var th_input = $(table).find('.tbl-title').find('input');
  var tb_input = $(table).find('tbody').find('input');
  $(th_input).on('click',function(){
    if(this.checked){
      tb_input.prop('checked',true);
    }else{
      tb_input.prop('checked',false)
    }
  })
  $(tb_input).on('click',function(){
    var input_arr = [];
    for(var i=0;i<tb_input.length;i++){
      if(tb_input[i].checked===true){
        input_arr.push(tb_input[i])
      }
    }
    if(input_arr.length===tb_input.length){
      $(th_input).prop('checked',true)
    }else{
      $(th_input).prop('checked',false)
    }
  })
}
exports.check_all = check_all;

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
var oldonwheel, oldonmousewheel1, oldonmousewheel2, oldontouchmove, oldonkeydown
    , isDisabled;
function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  oldonwheel = window.onwheel;
  window.onwheel = preventDefault; // modern standard

  oldonmousewheel1 = window.onmousewheel;
  window.onmousewheel = preventDefault; // older browsers, IE
  oldonmousewheel2 = document.onmousewheel;
  document.onmousewheel = preventDefault; // older browsers, IE

  oldontouchmove = window.ontouchmove;
  window.ontouchmove = preventDefault; // mobile

  oldonkeydown = document.onkeydown;
  document.onkeydown = preventDefaultForScrollKeys;
  isDisabled = true;
}
exports.disableScroll = disableScroll;
function enableScroll() {
  if (!isDisabled) return;
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);

  window.onwheel = oldonwheel; // modern standard

  window.onmousewheel = oldonmousewheel1; // older browsers, IE
  document.onmousewheel = oldonmousewheel2; // older browsers, IE

  window.ontouchmove = oldontouchmove; // mobile

  document.onkeydown = oldonkeydown;
  isDisabled = false;
}
exports.enableScroll = enableScroll;
//Home
/*$('.treeview-menu li').on('click',function(){
   var trlispan = $(this).find('span').html();
    var trli = $(this).parent('.treeview-menu').parent('li').find('.side-menu_title').find('span').html();
    $('.home_first').html(trli);
    $('.home_sec').html(trlispan)
    console.log(trli)
    console.log(trlispan)
})*/

//模态框2秒消失
var clearFlag ;
var modal_num = 1;
var countime = modal_num;
function modalClose(modal){
        if(countime>0){
            countime--;
        }else if(countime<=0){
            window.clearInterval(clearFlag);
            modal.fadeOut("");
            countime = modal_num;
            modal.modal('toggle');
        }
}
exports.modalClose=modalClose;

function colorChage() {
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
}
exports.colorChage = colorChage;

// 左侧导航栏
$(function(){
  // $('.sidebar li').on('click', function () {
  //     var first = $('.sidebar-menu li.active .side-menu_title').find('span').text();
  //     $('.home_first').text(first);
  //     var second = $('.sidebar-menu li.active .treeview-menu li.active').find('span').text();
  //     $('.home_sec').text(second);
  // })
  var treeview = $('.treeview-menu')
  var listmenu = treeview.parent('li');
  treeview.on('mouseover',function(){
      $(this).parent('li').addClass('sactive')
  })
  treeview.on('mouseout',function(){
      $(this).parent('li').removeClass('sactive')
  })
  $('.treeview-menu li').on('click', function () {
      $('.treeview-menu li').removeClass('active');
      $(this).addClass('active');
  })
  $('.control-sidebar ul li').on('click',function(){
      $('.control-sidebar').removeClass('open')
      $('.skin').removeClass('open');

  })

  var t = setInterval(function(){
      var wraph = $('.content-wrapper').height();
      $('.main-sidebar').height(wraph)
      $('.control-sidebar').height(wraph)
  },1)
})

// 获取短信验证码
var clock = '';
var nums = 60;
var btn;

function doLoop()
{
  nums--;
  if(nums > 0){
      btn.value = nums+'秒后可重新获取';
  }else{
      clearInterval(clock); //清除js定时器
      btn.disabled = false;
      btn.value = '获取短信验证码';
      nums = 60; //重置时间
  }
}
function settime(thisBtn)
{
  btn = thisBtn;
  btn.disabled = true; //将按钮置为不可点击
  btn.value = nums+'秒后可重新获取';
  clock = setInterval(doLoop, 1000); //一秒执行一次

}

exports.settime = settime;

// 回上一步
// 
$('.regist_btn .btn_goback').on('click', function () {
  history.go(-1);
})
// 图片

$("#update_img").change(function () {
  var $file = $(this);
  var fileObj = $file[0];
  var windowURL = window.URL || window.webkitURL;
  var dataURL;
  var $img = $("#preview");

  if (fileObj && fileObj.files && fileObj.files[0]) {
      dataURL = windowURL.createObjectURL(fileObj.files[0]);
      $img.attr('src', dataURL);
  } else {
      dataURL = $file.val();
      var imgObj = document.getElementById("preview");
      // 两个坑:
      // 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
      // 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
      imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
      imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

  }
});
// header

$('.sidebar-toggle').on('click',function(){
  if($('body').hasClass('sidebar-mini')){
      $('body').removeClass('sidebar-mini');
      $('.logo-mini').toggleClass('hide' )
      $('.logo-lg').toggleClass('hide');
      setTimeout(function(){
          $('.fa-angle-left').removeClass('hide')
      },300)
  }else{
      $('.fa-angle-left').addClass('hide')
      $('body').addClass('sidebar-mini');
      setTimeout(function(){
          $('.logo-lg').toggleClass('hide');
          $('.logo-mini').toggleClass('hide' )
      },300)
  }
});