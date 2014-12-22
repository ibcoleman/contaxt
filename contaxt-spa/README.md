Brunch with Brunch
==================

This is as minimal of a project as possible with brunch. It includes only
javascript, css, and optimization plugins. The rest is left up to you.

brunch watch --server

# Some Notes
I need to go back and strip the generated artifacts from the repo.

The contaxt-spa application uses a bunch of interacting technologies for HTML/CSS/JS management. 

Brunch
Bower
Grunt
Node - 

Plugins
* brunch-react - allows brunch to automatically watch and compile jsx files into js
* Need to figure out how to *not* join dev bower_components to vendor.js
* Since we're precompiling jsx with brunch-react, we don't need JSXTransform.js on pages. 

# Workflow
* Run brunch watch --server to start the server and watch the source for changes.
* JS / CSS concatenation is configured in brunch-config.coffee. 
* All .js and .jsx scripts in /app end up concatenated in app.js
* All .js and .jsx scripts in /bower_components and /vendor end up in vendor.js


