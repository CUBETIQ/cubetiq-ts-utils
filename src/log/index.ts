import { Loggable } from './interfaces';

class Log {
    static log(loggable: Loggable): void {
        switch (loggable.type) {
            case 'error':
                this.error(loggable.from, loggable.data);
                break;
            case 'warn':
                this.warn(loggable.from, loggable.data);
                break;
            default:
                this.info(loggable.from, loggable.data);
                break;
        }
    }

    static info(...data: any[]): void {
        console.log(data);
    }

    static error(...data: any[]): void {
        console.error(data);
    }

    static warn(...data: any[]): void {
        console.warn(data);
    }
}

export default Log;
