(window.webpackJsonp=window.webpackJsonp||[]).push([[1062],{2211:function(n,r,i){"use strict";i.r(r),r.default="@import '~coveo-styleguide/scss/common/palette.scss';\r\n@import '~coveo-styleguide/scss/variables.scss';\r\n\r\n.stickyFooter {\r\n    position: sticky;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: 1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    height: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: $white;\r\n    border-radius: 0 0 $border-radius $border-radius;\r\n\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: transform $navigation-toggle-duration ease-in-out, width $navigation-toggle-duration ease-in-out,\r\n        opacity $navigation-toggle-duration ease-in-out;\r\n    will-change: transform;\r\n}\r\n\r\n.stickyFooterOpened {\r\n    height: unset;\r\n    padding: $modal-footer-small-padding;\r\n    transform: translate3d(0, 0, 0);\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n:global(.sticky-footer-mod-header) {\r\n    margin-right: -$header-padding;\r\n    margin-left: -$header-padding;\r\n}\r\n"}}]);
//# sourceMappingURL=1062.bundle.js.map