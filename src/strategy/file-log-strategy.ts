import { AbstractLogStrategy } from './abstract-log-strategy';
import { LogLevel } from '../log-level';
import { LogStrategy } from './log-strategy';
import { LoggerConfiguration } from '../log-config';
import { appendFile } from 'fs';
import { EOL } from 'os';

export class FileLogStrategy extends AbstractLogStrategy {

    private fileName: string = 'log.txt';

    constructor(name: string, configuration: LoggerConfiguration) {
        super(name, configuration);
    }

    public log(level: LogLevel, ...strings: string[]): void {
        if (super.shouldLog(level)) {
            appendFile(this.fileName, super.assembleMessage(level, ...strings) + EOL, err => {
                if (err) throw err;
            });
        }
    }
}