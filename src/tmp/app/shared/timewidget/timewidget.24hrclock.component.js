"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var basetimewidget_component_1 = require("./basetimewidget.component");
var Timewidget24hrclockComponent = (function (_super) {
    __extends(Timewidget24hrclockComponent, _super);
    function Timewidget24hrclockComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectedTime = new Time('12am');
        _this.timeList = [
            new Time('12am'),
            new Time('1am'),
            new Time('2am'),
            new Time('3am'),
            new Time('4am'),
            new Time('5am'),
            new Time('6am'),
            new Time('7am'),
            new Time('8am'),
            new Time('9am'),
            new Time('10am'),
            new Time('11am'),
            new Time('noon'),
            new Time('1pm'),
            new Time('2pm'),
            new Time('3pm'),
            new Time('4pm'),
            new Time('5pm'),
            new Time('6pm'),
            new Time('7pm'),
            new Time('8pm'),
            new Time('9pm'),
            new Time('1pm'),
            new Time('11pm')
        ];
        return _this;
    }
    return Timewidget24hrclockComponent;
}(basetimewidget_component_1.BaseTimeWidgetComponent));
Timewidget24hrclockComponent = __decorate([
    core_1.Component({
        selector: 'dl-timewidget-24hrclock',
        templateUrl: 'app/shared/timewidget/timewidget.basic.component.html'
    })
], Timewidget24hrclockComponent);
exports.Timewidget24hrclockComponent = Timewidget24hrclockComponent;
var Time = (function () {
    function Time(currentTime) {
        this.currentTime = currentTime;
    }
    return Time;
}());

//# sourceMappingURL=timewidget.24hrclock.component.js.map
