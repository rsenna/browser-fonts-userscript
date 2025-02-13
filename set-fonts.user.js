// ==UserScript==
// @name         Set Proportional and Monospace Fonts
// @namespace    https://github.com/rsenna
// @version      0.1
// @description  An extremely simple userscript for changing webpage fonts.
//               Currently only GitHub is supported, but other domains can easily be added through `@match` rules.
//               Fonts can be directly changed in the `proportional` and/or `monospace` variables.
//               Another option is usin `set-fonts.scss` to generate a new CSS content, and update it here.
// @author       rsenna
// @match        *://github.com/*
// @match        *://*.github.com/*
// @grant        none
// ==/UserScript==
//
const proportional = "'Noto Sans Condensed','Open Sans',sans-serif";
const monospace =
  "'VictorMono Nerd Font','Hurmit Nerd Font',Consolas,'Courier New',monospace !important;font-size:0.75rem;line-height:1.5";

const innerHTML = `:not(textarea),:not(textarea):first-child,:not(textarea):last-child *,:not(textarea):first-child,\
:not(textarea):first-child:first-child,:not(textarea):first-child:last-child *,:not(textarea):last-child *,\
:not(textarea):last-child *:first-child,:not(textarea):last-child *:last-child *,:not(textarea):first-child,\
:not(textarea):first-child:first-child,:not(textarea):first-child:last-child *,:not(textarea):first-child:first-child,\
:not(textarea):first-child:first-child:first-child,:not(textarea):first-child:first-child:last-child *,\
:not(textarea):first-child:last-child *,:not(textarea):first-child:last-child *:first-child,\
:not(textarea):first-child:last-child *:last-child *,:not(textarea):last-child *,:not(textarea):last-child *:first-child,\
:not(textarea):last-child *:last-child *,:not(textarea):last-child *:first-child,:not(textarea):last-child *:first-child:first-child,\
:not(textarea):last-child *:first-child:last-child *,:not(textarea):last-child *:last-child *,:not(textarea):last-child *:last-child *:first-child,\
:not(textarea):last-child *:last-child *:last-child *,:not(code),:not(code):first-child,:not(code):last-child *,:not(code):first-child,\
:not(code):first-child:first-child,:not(code):first-child:last-child *,:not(code):last-child *,:not(code):last-child *:first-child,\
:not(code):last-child *:last-child *,:not(code):first-child,:not(code):first-child:first-child,:not(code):first-child:last-child *,\
:not(code):first-child:first-child,:not(code):first-child:first-child:first-child,:not(code):first-child:first-child:last-child *,\
:not(code):first-child:last-child *,:not(code):first-child:last-child *:first-child,:not(code):first-child:last-child *:last-child *,\
:not(code):last-child *,:not(code):last-child *:first-child,:not(code):last-child *:last-child *,:not(code):last-child *:first-child,\
:not(code):last-child *:first-child:first-child,:not(code):last-child *:first-child:last-child *,:not(code):last-child *:last-child *,\
:not(code):last-child *:last-child *:first-child,:not(code):last-child *:last-child *:last-child *,:not(tt),:not(tt):first-child,\
:not(tt):last-child *,:not(tt):first-child,:not(tt):first-child:first-child,:not(tt):first-child:last-child *,:not(tt):last-child *,\
:not(tt):last-child *:first-child,:not(tt):last-child *:last-child *,:not(tt):first-child,:not(tt):first-child:first-child,\
:not(tt):first-child:last-child *,:not(tt):first-child:first-child,:not(tt):first-child:first-child:first-child,\
:not(tt):first-child:first-child:last-child *,:not(tt):first-child:last-child *,:not(tt):first-child:last-child *:first-child,\
:not(tt):first-child:last-child *:last-child *,:not(tt):last-child *,:not(tt):last-child *:first-child,:not(tt):last-child *:last-child *,\
:not(tt):last-child *:first-child,:not(tt):last-child *:first-child:first-child,:not(tt):last-child *:first-child:last-child *,\
:not(tt):last-child *:last-child *,:not(tt):last-child *:last-child *:first-child,:not(tt):last-child *:last-child *:last-child *,\
:not(pre),:not(pre):first-child,:not(pre):last-child *,:not(pre):first-child,:not(pre):first-child:first-child,\
:not(pre):first-child:last-child *,:not(pre):last-child *,:not(pre):last-child *:first-child,:not(pre):last-child *:last-child *,\
:not(pre):first-child,:not(pre):first-child:first-child,:not(pre):first-child:last-child *,:not(pre):first-child:first-child,\
:not(pre):first-child:first-child:first-child,:not(pre):first-child:first-child:last-child *,:not(pre):first-child:last-child *,\
:not(pre):first-child:last-child *:first-child,:not(pre):first-child:last-child *:last-child *,:not(pre):last-child *,\
:not(pre):last-child *:first-child,:not(pre):last-child *:last-child *,:not(pre):last-child *:first-child,\
:not(pre):last-child *:first-child:first-child,:not(pre):last-child *:first-child:last-child *,:not(pre):last-child *:last-child *,\
:not(pre):last-child *:last-child *:first-child,:not(pre):last-child *:last-child *:last-child *\
{font-family: ${proportional}};\
textarea,textarea:first-child,textarea:last-child *,textarea:first-child,textarea:first-child:first-child,\
textarea:first-child:last-child *,textarea:last-child *,textarea:last-child *:first-child,textarea:last-child *:last-child *,\
textarea:first-child,textarea:first-child:first-child,textarea:first-child:last-child *,textarea:first-child:first-child,\
textarea:first-child:first-child:first-child,textarea:first-child:first-child:last-child *,textarea:first-child:last-child *,\
textarea:first-child:last-child *:first-child,textarea:first-child:last-child *:last-child *,textarea:last-child *,\
textarea:last-child *:first-child,textarea:last-child *:last-child *,textarea:last-child *:first-child,textarea:last-child *:first-child:first-child,\
textarea:last-child *:first-child:last-child *,textarea:last-child *:last-child *,textarea:last-child *:last-child *:first-child,\
textarea:last-child *:last-child *:last-child *,textarea *,textarea *:first-child,textarea *:last-child *,textarea *:first-child,\
textarea *:first-child:first-child,textarea *:first-child:last-child *,textarea *:last-child *,textarea *:last-child *:first-child,\
textarea *:last-child *:last-child *,textarea *:first-child,textarea *:first-child:first-child,textarea *:first-child:last-child *,\
textarea *:first-child:first-child,textarea *:first-child:first-child:first-child,textarea *:first-child:first-child:last-child *,\
textarea *:first-child:last-child *,textarea *:first-child:last-child *:first-child,textarea *:first-child:last-child *:last-child *,\
textarea *:last-child *,textarea *:last-child *:first-child,textarea *:last-child *:last-child *,textarea *:last-child *:first-child,\
textarea *:last-child *:first-child:first-child,textarea *:last-child *:first-child:last-child *,textarea *:last-child *:last-child *,\
textarea *:last-child *:last-child *:first-child,textarea *:last-child *:last-child *:last-child *,code,code:first-child,\
code:last-child *,code:first-child,code:first-child:first-child,code:first-child:last-child *,code:last-child *,code:last-child *:first-child,\
code:last-child *:last-child *,code:first-child,code:first-child:first-child,code:first-child:last-child *,code:first-child:first-child,\
code:first-child:first-child:first-child,code:first-child:first-child:last-child *,code:first-child:last-child *,code:first-child:last-child *:first-child,\
code:first-child:last-child *:last-child *,code:last-child *,code:last-child *:first-child,code:last-child *:last-child *,code:last-child *:first-child,\
code:last-child *:first-child:first-child,code:last-child *:first-child:last-child *,code:last-child *:last-child *,code:last-child *:last-child *:first-child,\
code:last-child *:last-child *:last-child *,code *,code *:first-child,code *:last-child *,code *:first-child,code *:first-child:first-child,\
code *:first-child:last-child *,code *:last-child *,code *:last-child *:first-child,code *:last-child *:last-child *,code *:first-child,\
code *:first-child:first-child,code *:first-child:last-child *,code *:first-child:first-child,code *:first-child:first-child:first-child,\
code *:first-child:first-child:last-child *,code *:first-child:last-child *,code *:first-child:last-child *:first-child,\
code *:first-child:last-child *:last-child *,code *:last-child *,code *:last-child *:first-child,code *:last-child *:last-child *,\
code *:last-child *:first-child,code *:last-child *:first-child:first-child,code *:last-child *:first-child:last-child *,code *:last-child *:last-child *,\
code *:last-child *:last-child *:first-child,code *:last-child *:last-child *:last-child *,tt,tt:first-child,tt:last-child *,tt:first-child,\
tt:first-child:first-child,tt:first-child:last-child *,tt:last-child *,tt:last-child *:first-child,tt:last-child *:last-child *,tt:first-child,\
tt:first-child:first-child,tt:first-child:last-child *,tt:first-child:first-child,tt:first-child:first-child:first-child,\
tt:first-child:first-child:last-child *,tt:first-child:last-child *,tt:first-child:last-child *:first-child,tt:first-child:last-child *:last-child *,\
tt:last-child *,tt:last-child *:first-child,tt:last-child *:last-child *,tt:last-child *:first-child,tt:last-child *:first-child:first-child,\
tt:last-child *:first-child:last-child *,tt:last-child *:last-child *,tt:last-child *:last-child *:first-child,tt:last-child *:last-child *:last-child *,\
tt *,tt *:first-child,tt *:last-child *,tt *:first-child,tt *:first-child:first-child,tt *:first-child:last-child *,tt *:last-child *,\
tt *:last-child *:first-child,tt *:last-child *:last-child *,tt *:first-child,tt *:first-child:first-child,tt *:first-child:last-child *,\
tt *:first-child:first-child,tt *:first-child:first-child:first-child,tt *:first-child:first-child:last-child *,tt *:first-child:last-child *,\
tt *:first-child:last-child *:first-child,tt *:first-child:last-child *:last-child *,tt *:last-child *,tt *:last-child *:first-child,\
tt *:last-child *:last-child *,tt *:last-child *:first-child,tt *:last-child *:first-child:first-child,tt *:last-child *:first-child:last-child *,\
tt *:last-child *:last-child *,tt *:last-child *:last-child *:first-child,tt *:last-child *:last-child *:last-child *,pre,pre:first-child,\
pre:last-child *,pre:first-child,pre:first-child:first-child,pre:first-child:last-child *,pre:last-child *,pre:last-child *:first-child,\
pre:last-child *:last-child *,pre:first-child,pre:first-child:first-child,pre:first-child:last-child *,pre:first-child:first-child,\
pre:first-child:first-child:first-child,pre:first-child:first-child:last-child *,pre:first-child:last-child *,pre:first-child:last-child *:first-child,\
pre:first-child:last-child *:last-child *,pre:last-child *,pre:last-child *:first-child,pre:last-child *:last-child *,pre:last-child *:first-child,\
pre:last-child *:first-child:first-child,pre:last-child *:first-child:last-child *,pre:last-child *:last-child *,pre:last-child *:last-child *:first-child,\
pre:last-child *:last-child *:last-child *,pre *,pre *:first-child,pre *:last-child *,pre *:first-child,pre *:first-child:first-child,\
pre *:first-child:last-child *,pre *:last-child *,pre *:last-child *:first-child,pre *:last-child *:last-child *,pre *:first-child,\
pre *:first-child:first-child,pre *:first-child:last-child *,pre *:first-child:first-child,pre *:first-child:first-child:first-child,\
pre *:first-child:first-child:last-child *,pre *:first-child:last-child *,pre *:first-child:last-child *:first-child,pre *:first-child:last-child *:last-child *,\
pre *:last-child *,pre *:last-child *:first-child,pre *:last-child *:last-child *,pre *:last-child *:first-child,pre *:last-child *:first-child:first-child,\
pre *:last-child *:first-child:last-child *,pre *:last-child *:last-child *,pre *:last-child *:last-child *:first-child,pre *:last-child *:last-child *:last-child *\
{font-family:${monospace}};\
.post-text ul li,.post-text ol li,.wmd-preview ul li,.wmd-preview ol li{margin-bottom:0}`;

const styleTag = document.createElement("style");
styleTag.innerHTML = innerHTML;

document.body.appendChild(styleTag);
