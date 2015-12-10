class BaseLog {
    constructor() {
        this.logName = `Hey
        
        something
        
        special`;

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


class NewLogger extends BaseLog {

    constructor(logName) {
        super(logName);
    }

    writeLine(msg) {
        super.log(msg + '\r\n' + " some" );
    }
}