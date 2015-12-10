var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseLog = (function () {
    function BaseLog(logName) {
        this.logName = logName;
        var _logName = "Log1";
        this.logName = _logName;
    }
    BaseLog.prototype.log = function (msg) {
        console.log(this.logName + ': ' + msg);
    };
    return BaseLog;
})();
var Logger = (function (_super) {
    __extends(Logger, _super);
    function Logger(logName) {
        _super.call(this, logName);
    }
    Logger.prototype.writeLine = function (msg) {
        _super.prototype.log.call(this, msg + '\r\n');
    };
    return Logger;
})(BaseLog);
//# sourceMappingURL=app.js.map