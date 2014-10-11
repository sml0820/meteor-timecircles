Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.addFiles('sml0820:meteor-timecircles.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sml0820:meteor-timecircles');
  api.addFiles('sml0820:meteor-timecircles-tests.js');
});
