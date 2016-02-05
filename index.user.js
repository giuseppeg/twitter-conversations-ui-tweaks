// ==UserScript==
// @name twitter-conversations-ui-tweaks
// @description A few CSS tweaks to the new Twitter conversations pop up.
// @version 0.1.0
// @match https://twitter.com/*
// ==/UserScript==
(function () {
  var styles = '\
.PermalinkOverlay {\
    top: 46px;\
    background: rgba(255, 255, 255, .9);\
    text-align: center;\
    z-index: 999;\
}\
.PermalinkOverlay:after {\
    display: inline-block;\
    vertical-align: middle;\
    width: 0;\
    height: 100%;\
    content: "";\
}\
.PermalinkOverlay-modal {\
    position: relative !important;\
    top: 0 !important;\
    left: 48px !important;\
    display: inline-block;\
    width: 95% !important;\
    max-width: 690px;\
    margin: 1em auto !important;\
    overflow-y: auto;\
    vertical-align: middle;\
    text-align: initial;\
}\
.PermalinkProfile-dismiss,\
.TweetArrows a,\
.TweetArrows a:hover,\
.TweetArrows a:focus {\
    color: currentColor !important;\
    opacity: 0.6;\
}\
.PermalinkProfile-dismiss:hover,\
.PermalinkProfile-dismiss:focus,\
.TweetArrows a:hover,\
.TweetArrows a:focus {\
  opacity: 1;\
}\
';
  javascript:document.body.insertAdjacentHTML('beforeEnd', ['<style>', styles, '</style>'].join(''))
}());
