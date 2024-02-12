import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

async function main() {
  const server = app.listen(config.port, () => {
    logger.info(`Server is listening on port : ${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        logger.info('Server closed!');
      });
    }
    process.exit(1);
  };

  const unExpectedErrorHandler = (error: unknown) => {
    errorLogger.error(error);
    exitHandler();
  };
  process.on('uncaughtException', unExpectedErrorHandler);
  process.on('unhandledRejection', unExpectedErrorHandler);

  process.on('SIGTERM', () => {
    console.log('SIGTERM RECEIVED');
    if (server) {
      server.close();
    }
  });
}

main();
