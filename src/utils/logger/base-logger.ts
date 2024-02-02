import {LogLevel} from "./log-level";

export interface BaseLogger {
  setLogLevel(logLevel: LogLevel): void;
  log(message: string, logLevel?: LogLevel): void;
}