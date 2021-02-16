// ==UserScript==
// @name         NitroType Auto Reload
// @namespace    https://github.com/Ray-Adams
// @version      1.1.0
// @description  Automatically reloads the page at the end of each race.
// @author       Ray Adams
// @match        *://www.nitrotype.com/race
// @run-at       document-end
// @grant        none
// ==/UserScript==

(() => {

    const options = {
        intervalMs: 100,             // Recommended milliseconds
        reloadWhenDisqualified: true // Can be changed to false
    };

    const client = () => {

        let btn = {
            Dqed: options.reloadWhenDisqualified ? document.getElementsByClassName('btn btn--light btn--fw')[1] : null,
            Finished: document.getElementsByClassName('btn btn--primary btn--fw btn--gloss animate--iconSlam dhf')[0]
        };

        if (document.body.contains(btn.Dqed || btn.Finished)) {

            clearInterval(intervalId);
            location.reload();

        }

    };

    const intervalId = setInterval(client, options.intervalMs);

    console.info('Auto Reload Activated.')

})()
