import { Logger } from './logger';

const logger = new Logger('Jesus');
logger.info('This', 'is', 'info');
logger.debug('This', 'is', 'debug');
logger.error('This', 'is', 'error');
logger.warning('This', 'is', 'warning');
