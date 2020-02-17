Package.describe({
  name: 'harrison:maestro-appcache',
  summary: "Enable the application cache in the browser, Maestro tweaks to allow Modern only and up size limit",
  version: "1.2.4-0",
  git: ''
});

Package.onUse(api => {
  api.versionsFrom('1.8.1');
  api.use('ecmascript', ['client', 'server']);
  api.use(['webapp', 'routepolicy'], 'server');
  api.use('reload', 'client');
  api.use('autoupdate', 'server', { weak: true });
  api.mainModule('appcache-client.js', 'client');
  api.mainModule('appcache-server.js', 'server');
});

Package.onTest(api => {
  api.use('tinytest');
  api.use('appcache');
  api.use('fetch');
  api.use('webapp', 'server');
  api.addFiles('appcache_tests-server.js', 'server');
  api.addFiles('appcache_tests-client.js', 'client');
});