Package.describe({
  summary: " TimeCircles is a jQuery plugin that provides a nice looking way to count down or up ",
  version: "0.1.0",
  git: "https://github.com/sml0820/meteor-timecircles.git"
});

Package.onUse(function(api) {
  api.use('jquery');
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles(['TimeCircles/inc/TimeCircles.js', 'TimeCircles/inc/TimeCircles.css']);
});

Package.onTest(function(api) {
  api.use('tinytest, jquery');
  api.use('sml0820:meteor-timecircles');
  api.addFiles(['TimeCircles/inc/TimeCircles.js', 'TimeCircles/inc/TimeCircles.css']);
});
