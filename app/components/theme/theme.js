System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Theme;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Theme = (function () {
                function Theme() {
                }
                Theme.prototype.switcher = function (color) {
                    console.log(color);
                    document.querySelector('body').className = color;
                };
                Theme = __decorate([
                    core_1.Component({
                        selector: 'theme-switcher',
                        template: "\n    <div>\n    <span (click)=\"switcher('blue')\" class=\"blue\"></span>\n    <span (click)=\"switcher('red')\" class=\"red\"></span>\n    <span (click)=\"switcher('green')\" class=\"green\"></span>\n    <span (click)=\"switcher('yellow')\" class=\"yellow\"></span>\n    <span (click)=\"switcher('teal')\" class=\"teal\"></span>\n    </div>\n",
                        styles: ["\n  span{\n    cursor: pointer;\n    width: 8px;\n    height: 8px;\n    display: inline-block;\n    border-radius: 50%;\n    box-shadow: 2px 2px 2px rgba(0,0,0,.1);\n  }\n  .blue{\n    background-color: #2196F3;\n   }\n   .red{\n   background-color: #f44336;\n   }\n   .yellow{\n   background-color: #ff9800;\n   }\n   .green{\n   background-color: #4CAF50;\n   }\n   .teal{\n   background-color: #009688;\n   }\n  "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Theme);
                return Theme;
            }());
            exports_1("Theme", Theme);
        }
    }
});
