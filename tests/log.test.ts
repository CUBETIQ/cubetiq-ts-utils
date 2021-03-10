import Index from '../src/Log';

describe('logging into console', function () {
    it('info', function () {
        Index.info('I am an info!');
    });

    it('warn', function () {
        Index.info('I am a warn!');
    });

    it('error', function () {
        Index.info('I am an error!');
    });

    it('loggable', function () {
        Index.log({
            type: 'info',
            from: 'log.test.ts',
            data: 'I am loggable called'
        });
    });
});
