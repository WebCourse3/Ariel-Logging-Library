import { LogLevel } from './log-level';

export interface LoggerConfiguration {
    console: boolean;
    file: boolean;
    colors: boolean;
    logLevel: LogLevel;
}
