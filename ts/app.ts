class BaseLog {
    constructor(private logName) {
        let _logName = "Log1";
        this.logName = _logName;        
    }

    log(msg) {
        console.log(this.logName + ': ' + msg);
    }
}

class Logger extends BaseLog {

    constructor(logName) {
        super(logName);
    }

    writeLine(msg) {
        super.log(msg + '\r\n');
    }
}