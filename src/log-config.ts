import { LogLevel } from './log-level';

export const config = {
    colors: true,
    console: true,
    file: true,
    logLevel: LogLevel.INFO
} as LoggerConfiguration;

export interface LoggerConfiguration {
    console: boolean;
    file: boolean;
    colors: boolean;
    logLevel: LogLevel;
}