import Log from '../src/log/Log';

describe('logging into console', function () {
    it('info', function () {
        Log.info('I am an info!');
    });

    it('warn', function () {
        Log.info('I am a warn!');
    });

    it('error', function () {
        Log.info('I am an error!');
    });

    it('loggable', function () {
        Log.log({
            type: 'info',
            from: 'log.test.ts',
            data: 'I am loggable called'
        });
    });
});
