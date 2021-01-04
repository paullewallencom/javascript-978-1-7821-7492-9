Modernizr.load({
  test: Modernizr.geolocation,
  yep : 'js/geo.js',
  nope: 'js/geo-polyfill.js'
});