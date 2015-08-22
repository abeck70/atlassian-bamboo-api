module.exports = function () {
    return {
        files: [
            'lib/*.js'
        ],

        tests: [
            'test/*-spec.js'
        ],

        env: {
            type: 'node'
        },

        preprocessors: {
            '**/*.js': file => require('babel').transform(file.content, {sourceMap: true})
        }
    };
};