# qr-witch
Generate a QR code for free in the browser.

## Why
There are a million QR Code generators out there, but a lot of the more popular/easily accessible ones either:
- have way too many options for my use case (just get a regular QR code out of some text/a URL),
- store the data I put in there on their servers, or
- put a redirect URL in the code instead of my data which gives them control to change it/make it expire unless I pay.

There are a few good ones IMO, I just wanted something simple and straightforward for my personal use (and, hey, if someone else finds it useful, great).

## How it works
- You enter text/a URL in the box and click Enter/"Go".
- The website generates the data you entered *in your browser* without ever sending it to a server for processing or storage.
- That's it, really.

## Credits
The lib used to generate the codes is [QRCode.js](https://github.com/davidshimjs/qrcodejs). The code itself and its license can be found in [this folder](js/qr/).
