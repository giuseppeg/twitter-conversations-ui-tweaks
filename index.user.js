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
  overflow-y: auto;\
}\
.PermalinkOverlay:after {\
  display: inline-block;\
  vertical-align: middle;\
  width: 0;\
  height: 100%;\
  content: "";\
}\
.PermalinkOverlay-modal {\
  position: static !important;\
  display: inline-block;\
  width: 95% !important;\
  max-width: 637px;\
  margin: 10px auto !important;\
  vertical-align: middle;\
  text-align: initial;\
  pointer-events: none;\
}\
.PermalinkOverlay .permalink {\
  width: 100%;\
  box-sizing: border-box;\
}\
.PermalinkOverlay-content {\
  pointer-events: initial;\
}\
.TweetArrows {\
  left: 50% !important;\
  margin-left: -400px !important;\
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
