import requireHacker from 'require-hacker';

requireHacker.hook('png', () => 'module.exports = ""');
requireHacker.hook('css', () => 'module.exports = ""');
