// ==UserScript==
// @name         NitroType Auto Reload
// @namespace    https://github.com/Ray-Adams
// @version      1.0.2
// @description  Automatically reloads the page at the end of each race.
// @author       Ray Adams
// @match        *://www.nitrotype.com/race
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  setInterval(function(){
    var b = document.getElementsByClassName('btn btn--primary btn--fw btn--pulse animate--iconSlam')[0];
    if (b !== null && b !== undefined) {
      location.reload(); // Slightly faster than b.click();
    };
  }, 100);

})();
