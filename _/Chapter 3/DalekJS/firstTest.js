module.exports = {
'Page title is as per expectation': function (test) {
  test
    .open('http://google.com')
    .assert.title().is('Google', 'Title exists')
    .done();
}
};