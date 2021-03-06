import { LoggerConfiguration } from '../logger-configuration';
import { LogLevel } from '../log-level';
import { LogStrategy } from './log-strategy';

export abstract class AbstractLogStrategy implements LogStrategy {
    private _name: string;
    private _configuration: LoggerConfiguration;

    constructor(name: string, configuration: LoggerConfiguration) {
        this._name = name;
        this._configuration = configuration;
    }

    get name(): string {
        return this._name;
    }

    get configuration(): LoggerConfiguration {
        return this._configuration;
    }

    public assembleMessage(loglevel: LogLevel, ...strings: string[]): string {
        const message = strings.join(' ');
        return this._configuration.logLevel ? `[${LogLevel[loglevel]}] ${message}` : message;
    }

    public shouldLog(level: LogLevel): boolean {
        return level >= (<any>LogLevel)[this.configuration.logLevel];
    }

    abstract log(level: LogLevel, ...strings: string[]): void;
}
