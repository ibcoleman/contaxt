
var hello = require('scripts/helloWorld').hello;

$(document).ready(function() {
    console.log(hello());
    document.getElementById('hello').innerText = hello();
});
