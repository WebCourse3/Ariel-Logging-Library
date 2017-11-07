export const config = {
    colors: true,
    console: true,
    file: true,
    logLevel: true
} as LoggerConfiguration;

export interface LoggerConfiguration {
    console: boolean;
    file: boolean;
    colors: boolean;
    logLevel: boolean;
}