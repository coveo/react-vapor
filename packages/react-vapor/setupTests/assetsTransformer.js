const path = require('path');

module.exports = {
    process: (src, filename, config, options) => `module.exports = ${JSON.stringify(path.basename(filename))};`,
};
