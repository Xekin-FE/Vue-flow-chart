(function (window) { var svgSprite = 
    '<svg><symbol id="icon-expand" viewBox="0 0 1024 1024"><path d="M954.753 878.662l-216.24-216.308c46.911-61.559 74.816-138.381 74.816-221.75 0-202.28-163.98-366.259-366.259-366.259S80.811 238.324 80.811 440.604 244.79 806.863 447.07 806.863c83.764 0 160.91-28.179 222.614-75.493l216.138 216.208c18.377 18.382 48.453 18.385 66.834 0.008l2.089-2.089C973.127 927.12 973.13 897.045 954.753 878.662zM446.332 714.559c-151.71 0-274.695-122.984-274.695-274.695 0-151.709 122.984-274.694 274.695-274.694 151.709 0 274.694 122.984 274.694 274.694C721.026 591.575 598.041 714.559 446.332 714.559z"></path><path d="M594.046 420.585c-9.699-9.699-21.573-9.246-21.573-9.246l-92.414-0.104-0.105-92.414c0 0 0.454-11.875-9.245-21.573 0 0-7.523-7.342-19.67-7.342 0 0-9.971-1.088-18.763 7.704 0 0-9.608 6.708-9.608 21.03l0 92.53-91.399-0.102c-11.513-1.179-21.755 9.065-21.755 9.065-7.977 7.975-8.158 20.666-8.158 20.666 0 11.15 8.34 18.492 8.34 18.492 10.243 10.242 20.576 9.337 20.576 9.337l92.395 0 0 92.395c0 0-0.905 10.333 9.337 20.576 0 0 7.342 8.338 18.491 8.338 0 0 12.691-0.18 20.667-8.157 0 0 10.243-10.243 9.065-21.755l-0.102-91.399 92.53 0c14.322 0 21.029-9.609 21.029-9.609 8.792-8.792 7.705-18.762 7.705-18.762C601.388 428.107 594.046 420.585 594.046 420.585z"></path></symbol><symbol id="icon-narrow" viewBox="0 0 1024 1024"><path d="M954.824 878.728 738.568 662.402c46.915-61.564 74.822-138.393 74.822-221.769 0-202.296-163.994-366.289-366.289-366.289-202.296 0-366.289 163.993-366.289 366.289S244.804 806.923 447.1 806.923c83.771 0 160.922-28.182 222.631-75.499L885.887 947.65c18.38 18.383 48.458 18.387 66.841 0.008l2.089-2.089C973.2 927.189 973.203 897.112 954.824 878.728zM446.361 714.612c-151.722 0-274.717-122.994-274.717-274.717 0-151.722 122.996-274.716 274.717-274.716s274.717 122.994 274.717 274.716C721.078 591.617 598.083 714.612 446.361 714.612z"></path><path d="M594.088 420.613c-9.701-9.699-21.576-9.247-21.576-9.247l-92.42-0.104-57.395-0.065-91.408-0.102c-11.513-1.179-21.757 9.065-21.757 9.065-7.976 7.976-8.159 20.667-8.159 20.667 0.001 11.151 8.341 18.494 8.341 18.494 10.243 10.243 20.578 9.338 20.578 9.338l92.403 0 57.461-0.001 92.538 0c14.322 0 21.031-9.61 21.031-9.61 8.793-8.793 7.705-18.764 7.705-18.764C601.429 428.136 594.088 420.613 594.088 420.613z"></path></symbol><symbol id="icon-undo" viewBox="0 0 1024 1024"><path d="M778.33216 1024c113.72544-206.02624 132.89472-520.31488-313.856-509.82912l0 253.82912-384-384 384-384 0 248.37888C999.4368 234.43456 1059.05408 720.5888 778.33216 1024z"></path></symbol><symbol id="icon-search" viewBox="0 0 1024 1024"><path d="M749.697657 686.418448c47.177486-60.616566 75.566046-136.574538 75.566046-219.170698 0-197.409069-160.606885-358.01493-358.01493-358.01493-197.407022 0-358.016976 160.605861-358.016976 358.01493 0 197.407022 160.609954 358.01493 358.016976 358.01493 82.59923 0 158.53162-28.408003 219.168652-75.566046L851.486948 914.76718l63.281255-63.284325L749.697657 686.418448zM467.248773 735.759203c-148.068314 0-268.5135-120.445186-268.5135-268.511453s120.446209-268.511453 268.5135-268.511453c148.066267 0 268.511453 120.445186 268.511453 268.511453S615.31504 735.759203 467.248773 735.759203z"></path></symbol><symbol id="icon-redo" viewBox="0 0 1024 1024"><path d="M543.04256 248.38656V0l384 384-384 384v-253.824c-446.75072-10.496-427.58656 303.77472-313.856 509.824-280.704-303.39072-221.11744-789.56544 313.856-775.61344z"></path></symbol><symbol id="icon-down-arrow" viewBox="0 0 1024 1024"><path d="M513.536 810.666667L5.930667 300.245333 1024 303.018667 513.536 810.666667z" fill="#595A5A" ></path></symbol><symbol id="icon-up-arrow" viewBox="0 0 1024 1024"><path d="M516.394667 256L1024 766.421333 5.930667 763.605333 516.394667 256z" fill="#595A5A" ></path></symbol><symbol id="icon-remove" viewBox="0 0 1024 1024"><path d="M821.344 197.248l-126.752 17.824-11.904-84.512a36.48 36.48 0 0 0-14.464-24.192c-16.416-12.384-41.376-11.072-54.688-9.152l-253.792 35.648c-46.624 6.56-60.16 30.688-57.312 51.072l11.008 78.24 0.896 6.336-76.128 10.688-50.656 7.136a32 32 0 1 0 8.928 63.36l23.552-3.328 18.176-2.528 4.224-0.608 50.752-7.136 63.936-8.992 73.088-10.272 192-26.976 192-27.008 16.032-2.24c17.504-2.432 29.696-18.624 27.232-36.128s-18.528-29.76-36.128-27.232zM398.208 454.208a32 32 0 0 1 64 0v210.496a32 32 0 0 1-64 0v-210.496z m192 0a32 32 0 0 1 64 0v210.496a32 32 0 0 1-64 0v-210.496z m-352-40.736v392.704c0 20.608 9.984 38.816 25.184 50.56 10.816 8.32 24.192 13.44 38.848 13.44h447.936a63.36 63.36 0 0 0 38.816-13.44c15.232-11.712 25.216-29.888 25.216-50.56V394.176H237.344l0.864 19.328z"></path></symbol><symbol id="icon-mouse" viewBox="0 0 1024 1024"><path d="M956.4 307.6v-240h-240v204.6l-445 445H68v240h240V751.3l443.7-443.7h204.7z m-190-190h140v140h-140v-140zM258 907.2H118v-140h140v140z" fill=""></path></symbol><symbol id="icon-straight" viewBox="0 0 1024 1024"><path d="M956.4 307.6v-240h-240v204.6l-445 445H68v240h240V751.3l443.7-443.7h204.7z m-190-190h140v140h-140v-140zM258 907.2H118v-140h140v140z" fill=""></path></symbol><symbol id="icon-zhexianjiantou1" viewBox="0 0 1390 1024"><path d="M1293.834343 291.555556L1129.115152 151.660606v102.787879H588.929293v416.711111h-488.080808v73.955556h563.846464V328.533333h464.29091v98.909091l164.848484-135.886868z m96.969697 0"  ></path></symbol></svg>';var script = function () { var scripts = document.getElementsByTagName("script"); return scripts[scripts.length - 1] }(); var shouldInjectCss = script.getAttribute("data-injectcss"); var ready = function (fn) { if (document.addEventListener) { if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) { setTimeout(fn, 0) } else { var loadFn = function () { document.removeEventListener("DOMContentLoaded", loadFn, false); fn() }; document.addEventListener("DOMContentLoaded", loadFn, false) } } else if (document.attachEvent) { IEContentLoaded(window, fn) } function IEContentLoaded(w, fn) { var d = w.document, done = false, init = function () { if (!done) { done = true; fn() } }; var polling = function () { try { d.documentElement.doScroll("left") } catch (e) { setTimeout(polling, 50); return } init() }; polling(); d.onreadystatechange = function () { if (d.readyState == "complete") { d.onreadystatechange = null; init() } } } }; var before = function (el, target) { target.parentNode.insertBefore(el, target) }; var prepend = function (el, target) { if (target.firstChild) { before(el, target.firstChild) } else { target.appendChild(el) } }; function appendSvg() { var div, svg; div = document.createElement("div"); div.innerHTML = svgSprite; svgSprite = null; svg = div.getElementsByTagName("svg")[0]; if (svg) { svg.setAttribute("aria-hidden", "true"); svg.style.position = "absolute"; svg.style.width = 0; svg.style.height = 0; svg.style.overflow = "hidden"; prepend(svg, document.body) } } if (shouldInjectCss && !window.__iconfont__svg__cssinject__) { window.__iconfont__svg__cssinject__ = true; try { document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>") } catch (e) { console && console.log(e) } } ready(appendSvg) })(window)