# Set Proportional and Monospace Fonts

A [Userscript](http://userscripts-mirror.org/) for making selected domain pages use specific proportional and monospace fonts.
Nothing more than a stylesheet injector in JavaScript (using a `<link />` tag).

> [!NOTE]
> Here you'll also find a [SCSS file](https://github.com/rsenna/set-proportional-mono-fonts/blob/main/custom-fonts.scss) (`custom-fonts.scss`),
> to ease of use in further customizations: it can be used to generate a compressed CSS (e.g. with [Sass Playground](https://sass-lang.com/playground/),
> and then manually update the [main script](https://github.com/rsenna/set-proportional-mono-fonts/blob/main/set-fonts.user.js).

## Installation

First you must have a userscript manager browser extension installed, such as Tampermonkey or Greasemonkey.

For instance, with [Tampermonkey](http://tampermonkey.net/) that's how I would proceed:

1. Install [Tampermonkey](http://tampermonkey.net/) extension
- Chrome: https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
- Edge: https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd
- Firefox: https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
2. Access the [main script](https://github.com/rsenna/set-proportional-mono-fonts/blob/main/set-fonts.user.js) on this repo (or in your fork.)
3. Click on the `Raw` button (at the top right corner, just above the code.)
- This will kickstart the Tampermonkey install page.
4. Click on the `Install` button (also at the top right corner.)

And you're done.

> [!CAUTION]
> Whenever installing userscripts, beware: there *are* malicious scripts around.
> This one is safe though (I pinky-promise.)

## License

Released under the The KINDLY License. See [`LICENSE.md`](./LICENSE.md) file for the license document.

## Authors

* [Roger Senna](https://github.com/rsenna): This fork and latest changes.
* [Praveen Kumar Purushothaman](https://github.com/praveenscience): Original code, which this fork was based on.
