import { LoggerConfiguration } from '../logger';
import { AbstractLogStrategy } from './abstract-log-strategy';
import { LogLevel } from '../log-level';
import { LogStrategy } from './log-strategy';
import { appendFile } from 'fs';
import { EOL } from 'os';

export class FileLogStrategy extends AbstractLogStrategy {

    private fileName: string = 'log.txt';

    constructor(name: string, configuration: LoggerConfiguration) {
        super(name, configuration);
    }
    
    public log(level: LogLevel, ...strings: string[]): void {
        appendFile(this.fileName, super.assembleMessage(level, ...strings) + EOL, err => {
            if (err) throw err;
        });
    }
}