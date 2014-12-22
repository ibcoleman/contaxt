exports.config =
  # See https://github.com/brunch/brunch/blob/master/docs/config.md for documentation.
  plugins:
    react:
      harmony: yes
  paths:
    public: 'www'
    watched: ['app','vendor','test']
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(vendor|bower_components)/
        'test/javascripts/test.js': /^test(\/|\\)(?!vendor)/
        'test/javascripts/test-vendor.js': /^test(\/|\\)(?=vendor)/
      order:
        before: []

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^(app|vendor|bower_components)/
        'test/stylesheets/test.css': /^test/
      order:
        before: []
        after: []

    templates:
      joinTo: 'javascripts/app.js'

  conventions:
    assets: /(assets|vendor\/assets|font)/
