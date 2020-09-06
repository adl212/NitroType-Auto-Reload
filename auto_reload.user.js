// ==UserScript==
// @name         NitroType Auto Reload
// @namespace    https://github.com/Ray-Adams
// @version      1.0.3
// @description  Automatically reloads the page at the end of each race.
// @author       Ray Adams
// @match        *://www.nitrotype.com/race
// @grant        none
// ==/UserScript==

setInterval(() => {
  let button = document.getElementsByClassName('btn btn--primary btn--fw btn--pulse animate--iconSlam')[0];
  if (button !== null && button !== undefined) {
    location.reload(); // Slightly faster than button.click();
  };
}, 100);
