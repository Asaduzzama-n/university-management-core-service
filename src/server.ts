import app from './app';
import config from './config';

async function main() {
  const server = app.listen(config.port, () => {
    console.log(`Server is listening on port : ${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed!');
      });
    }
    process.exit(1);
  };

  const unExpectedErrorHandler = (error: unknown) => {
    console.error(error);
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
