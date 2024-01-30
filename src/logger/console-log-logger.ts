import {BaseLogger} from "./base-logger";
import {LogLevel} from "./log-level";

export class ConsoleLogLogger implements BaseLogger {
  private logLevel: LogLevel = LogLevel.ALL;

  public setLogLevel(logLevel: LogLevel): void {
    this.logLevel = logLevel;
  }

  public log(message: string, logLevel: LogLevel = LogLevel.ALL): void {
    if (logLevel <= this.logLevel) {
      console.log(message);
    }
  }

  public error(message: string): void {
    this.log(message, LogLevel.ERROR);
  }

  public warn(message: string): void {
    this.log(message, LogLevel.WARN);
  }
}