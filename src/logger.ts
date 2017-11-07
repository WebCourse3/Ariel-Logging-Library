import { LogLevel } from './log-level';
import { ConsoleLogStrategy } from './strategy/console-log-strategy';
import { FileLogStrategy } from './strategy/file-log-strategy';
import { LogStrategy } from './strategy/log-strategy';
import { config } from './log-config';

export class Logger {
    private logStrategies: LogStrategy[];

    constructor(name: string, configuration?: LoggerConfiguration) {
        this.logStrategies = new Array<LogStrategy>();
        const conf = configuration ? configuration : config;
        if (conf.file) {
            this.logStrategies.push(new FileLogStrategy(name, conf));
        }
        if (conf.console) {
            this.logStrategies.push(new ConsoleLogStrategy(name, conf));
        }
    }

    public log(level: LogLevel, ...strings: string[]): void {
        for (const logStrategy of this.logStrategies) {
            logStrategy.log(level, ...strings);
        }
    }

    public info(...strings: string[]): void {
        this.log(LogLevel.INFO, ...strings);
    }

    public warning(...strings: string[]): void {
        this.log(LogLevel.WARNING, ...strings);
    }

    public debug(...strings: string[]): void {
        this.log(LogLevel.DEBUG, ...strings);
    }

    public error(...strings: string[]): void {
        this.log(LogLevel.ERROR, ...strings);
    }
}

export interface LoggerConfiguration {
    console: boolean;
    file: boolean;
    colors: boolean;
    logLevel: boolean;
}