const path = require('path');

module.exports = function override(config, env) {
  const plugin = config.resolve.plugins[0];
  plugin.appSrc = path.join(plugin.appSrc, '../../../');
  const rule0 = config.module.rules[0];
  rule0.include = plugin.appSrc;
  rule0.exclude = /node_modules/;
  config.module.rules[1].oneOf[1].include = plugin.appSrc;
  return config;
};
