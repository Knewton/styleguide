var ReactTools = require('react-tools');

module.exports = {
    process: function(src, file) {
        // Run JSX transform only on JSX and React test files
        if (/\.jsx$/.test(file) || /-test.js$/.test(file)) {
            return ReactTools.transform(src);
        }
        return src;
    }
};
