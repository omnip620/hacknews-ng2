/**
 * Created by panzhichao on 16/4/13.
 */
System.register(['angular2/platform/browser', 'rxjs/Rx', './components/app/app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (_1) {},
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent);
        }
    }
});
