# NitroType Auto Reload
A NitroType userscript that automatically reloads the page at the end of each race.

## Installation
1. Download the Tampermonkey extension from https://www.tampermonkey.net/
2. Install [auto_reload.user.js](https://github.com/Ray-Adams/NitroType-Auto-Reload/raw/master/auto_reload.user.js)

## Options
```js
const options = {
    intervalMs: 100,             
    reloadWhenDisqualified: true
};
```
If you're using a *low-end device*, it may be a good idea to set `intervalMs` to a higher value, such as `500` for example.
By default, the script will reload tabs that have DQed, however, you can set `reloadWhenDisqualified` to `false` to turn it off.

## Release History
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
