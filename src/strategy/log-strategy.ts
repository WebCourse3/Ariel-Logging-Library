import { LogLevel } from '../log-level';

export interface LogStrategy {
    log(level: LogLevel, ...strings: string[]): void;
}
