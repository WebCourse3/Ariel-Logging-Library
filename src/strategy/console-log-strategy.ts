import { config } from '../log-config';
import { LoggerConfiguration } from '../logger';
import { AbstractLogStrategy } from './abstract-log-strategy';
import { LogLevel } from '../log-level';
import { LogStrategy } from './log-strategy';

export class ConsoleLogStrategy extends AbstractLogStrategy {

    constructor(name: string, configuration: LoggerConfiguration) {
        super(name, configuration);
    }

    private colorsMap = new Map<LogLevel, number>([
        [LogLevel.INFO, 32],
        [LogLevel.WARNING, 33],
        [LogLevel.ERROR, 31],
        [LogLevel.DEBUG, 34],
    ]);
    
    public log(level: LogLevel, ...strings: string[]): void {
        if (super.configuration.colors) {
            console.log(`\x1b[${this.colorsMap.get(level)}m%s\x1b[0m`, super.assembleMessage(level, ...strings)); 
        } else {
            console.log(super.assembleMessage(level, ...strings));
        }
    }
}