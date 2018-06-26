;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fenyexiayiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M183.8899 955.2978V109.50553599999999c0-5.4016 2.8621-10.6394 7.9206-13.44 5.0616-2.7986 11.0193-2.4443 15.5955 0.426L881.9917 519.3882c4.3264 2.7126 7.1987 7.5305 7.1987 13.014 0 5.4835-2.8703 10.3025-7.1997 13.014L207.4061 968.3118c-4.5773 2.8713-10.5339 3.2246-15.5955 0.426C186.751 965.9382 183.8889 960.6994 183.8899 955.2978L183.8899 955.2978z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenyezuiqianye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M279.5633 485.9187c-4.3387 2.7116-7.2182 7.5325-7.2182 13.0253s2.8805 10.3127 7.2182 13.0253l671.4542 419.6956c4.5783 2.8621 10.5308 3.2123 15.5873 0.4096s7.9145-8.0353 7.9145-13.4349V79.246336c0-5.3985-2.858-10.6322-7.9145-13.4349-5.0565-2.8027-11.009-2.4525-15.5873 0.4096L279.5633 485.9187z"  ></path>' +
    '' +
    '<path d="M79.5423 66.8508c0-3.9311 1.4991-7.8623 4.4995-10.8605 2.9993-2.9993 6.9304-4.4995 10.8605-4.4995h150.528c3.9311 0 7.8623 1.4991 10.8605 4.4995 2.9993 2.9993 4.4995 6.9304 4.4995 10.8605v863.232c0 3.9311-1.4991 7.8623-4.4995 10.8605-2.9993 2.9993-6.9304 4.4995-10.8605 4.4995h-150.528c-3.9311 0-7.8623-1.5002-10.8605-4.4995-2.9993-2.9993-4.4995-6.9304-4.4995-10.8605V66.85081600000001z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fenyeshangyiye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M889.1914 955.2978c0 5.4016-2.8621 10.6404-7.9217 13.44-5.0616 2.7996-11.0193 2.4453-15.5955-0.426L191.0886 545.4162c-4.3295-2.7126-7.1997-7.5305-7.1997-13.014s2.8733-10.3014 7.1987-13.014L865.6732 96.4915c4.5773-2.8703 10.5339-3.2246 15.5955-0.426 5.0596 2.8006 7.9217 8.0384 7.9217 13.44V955.2977920000001L889.1914 955.2978z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-pageLast" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M794.2943 61.7308c0-3.9311 1.5002-7.8623 4.4995-10.8605 2.9993-2.9993 6.9304-4.4995 10.8605-4.4995h151.552c3.9311 0 7.8623 1.4991 10.8605 4.4995 2.9993 2.9993 4.4995 6.9304 4.4995 10.8605v865.28c0 3.9311-1.5002 7.8623-4.4995 10.8605s-6.9304 4.4995-10.8605 4.4995h-151.552c-3.9311 0-7.8623-1.5002-10.8605-4.4995s-4.4995-6.9304-4.4995-10.8605V61.730816z"  ></path>' +
    '' +
    '<path d="M80.5663 914.6563c0 5.3996 2.858 10.6332 7.9145 13.4349 5.0565 2.8017 11.009 2.4525 15.5873-0.4096L776.5862 507.3203c4.3387-2.7116 7.2192-7.5325 7.2192-13.0253s-2.8805-10.3127-7.2192-13.0253L104.0681 60.9075c-4.5783-2.8611-10.5308-3.2123-15.5873-0.4096-5.0565 2.8017-7.9145 8.0353-7.9145 13.4349V914.6562560000001z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiala-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M182.737 182.737l334.581 329.263 323.945-326.478v50.656l-323.945 326.478-334.581-329.263z"  ></path>' +
    '' +
    '<path d="M182.737 461.344l334.581 329.263 323.945-326.478v50.656l-323.945 326.478-334.581-329.263z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)