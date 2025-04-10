type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogMessage {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
}

class Logger {
  private static instance: Logger;
  private isDevelopment: boolean;

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(level: LogLevel, message: string, context?: Record<string, unknown>): LogMessage {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      context
    };
  }

  private log(level: LogLevel, message: string, context?: Record<string, unknown>) {
    const formattedMessage = this.formatMessage(level, message, context);
    
    if (this.isDevelopment) {
      switch (level) {
        case 'info':
          console.log(`[INFO] ${formattedMessage.timestamp} - ${message}`, context || '');
          break;
        case 'warn':
          console.warn(`[WARN] ${formattedMessage.timestamp} - ${message}`, context || '');
          break;
        case 'error':
          console.error(`[ERROR] ${formattedMessage.timestamp} - ${message}`, context || '');
          break;
        case 'debug':
          console.debug(`[DEBUG] ${formattedMessage.timestamp} - ${message}`, context || '');
          break;
      }
    } else {
      // 프로덕션 환경에서는 로그를 파일이나 로깅 서비스로 전송할 수 있습니다.
      // TODO: 프로덕션 로깅 구현
      if (level === 'error') {
        console.error(`[ERROR] ${formattedMessage.timestamp} - ${message}`, context || '');
      } else if (level === 'warn') {
        console.warn(`[WARN] ${formattedMessage.timestamp} - ${message}`, context || '');
      } else if (level === 'info') {
        console.log(`[INFO] ${formattedMessage.timestamp} - ${message}`, context || '');
      }
    }
  }

  public info(message: string, context?: Record<string, unknown>) {
    this.log('info', message, context);
  }

  public warn(message: string, context?: Record<string, unknown>) {
    this.log('warn', message, context);
  }

  public error(message: string, context?: Record<string, unknown>) {
    this.log('error', message, context);
  }

  public debug(message: string, context?: Record<string, unknown>) {
    this.log('debug', message, context);
  }
}

export const logger = Logger.getInstance(); 