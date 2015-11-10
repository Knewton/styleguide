var babel = require('babel-core');

module.exports = {
    process: function(src, file) {
        // Run JSX transform only on JSX and React test files
        if (/\.jsx$/.test(file) || /-test.js$/.test(file)) {
            var babelOptions = {
                presets: ['es2015', 'react']
            };
            return babel.transform(src, babelOptions);
        }
        return src;
    }
};

