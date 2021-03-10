type LogType = 'info' | 'error' | 'warn'

export interface Loggable {
    type: LogType;
    from?: string;
    data?: any;
}