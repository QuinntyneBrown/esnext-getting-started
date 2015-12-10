"use strict";
var BaseLog = function() {
  function BaseLog() {
    this.logName = "Hey\n        \n        something\n        \n        special";
  }
  return ($traceurRuntime.createClass)(BaseLog, {log: function(msg) {
      console.log(this.logName + ': ' + msg);
    }}, {});
}();
var Logger = function($__super) {
  function Logger(logName) {
    $traceurRuntime.superConstructor(Logger).call(this, logName);
  }
  return ($traceurRuntime.createClass)(Logger, {writeLine: function(msg) {
      $traceurRuntime.superGet(this, Logger.prototype, "log").call(this, msg + '\r\n');
    }}, {}, $__super);
}(BaseLog);
var NewLogger = function($__super) {
  function NewLogger(logName) {
    $traceurRuntime.superConstructor(NewLogger).call(this, logName);
  }
  return ($traceurRuntime.createClass)(NewLogger, {writeLine: function(msg) {
      $traceurRuntime.superGet(this, NewLogger.prototype, "log").call(this, msg + '\r\n' + " some");
    }}, {}, $__super);
}(BaseLog);
