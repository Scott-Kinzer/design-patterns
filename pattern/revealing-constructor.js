var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import EventEmitter from "events";
var EventEmitter = require('events');
var EventBulder = /** @class */ (function (_super) {
    __extends(EventBulder, _super);
    function EventBulder(executor) {
        var _this = _super.call(this) || this;
        var emit = _this.emit.bind(_this);
        executor(emit);
        return _this;
    }
    return EventBulder;
}(EventEmitter));
var interval;
var eventBuilder = new EventBulder(function (emit) {
    var count = 0;
    interval = setInterval(function () {
        emit('tick', ++count);
    }, 1000);
});
eventBuilder.on('tick', function (count) {
    console.log('count:', count);
    if (count === 10) {
        clearInterval(interval);
    }
});
