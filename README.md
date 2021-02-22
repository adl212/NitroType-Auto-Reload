# NitroType Auto Reload
A NitroType userscript that automatically reloads the page at the end of each race.

## Installation
1. Download the Tampermonkey extension from https://www.tampermonkey.net/
2. Install [auto_reload.user.js](https://github.com/Ray-Adams/NitroType-Auto-Reload/raw/master/auto_reload.user.js)

## Options
```js
const options = {
    timerMs: 1000,             
    reloadWhenDisqualified: true
};
```
If your internet is slow, you may need to increase the value of `timerMs`.
By default, the script will reload tabs that have DQed, however, you can set `reloadWhenDisqualified` to `false` to turn it off.

## Release History
* 2.0.0
  * Implemented Mutation Observer API
  * Increased efficiency
* 1.1.0
  * Major refactor
  * Added options
  * Improved button detection system
* 1.0.1
  * Minor refactor
* 1.0.0
  * Initial release

## Compatability
Browser | Supported
--------|------------
Chrome  |     ✓
Firefox |     ✓
Safari  |     ✓
