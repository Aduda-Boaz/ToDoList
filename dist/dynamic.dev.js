"use strict";

/* eslint-disable no-undef */
var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var domHtml = new JSDOM("\n  <!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link href=\"//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css\" rel=\"stylesheet\">\n  <title>To-Do-List</title>\n</head>\n\n<body>\n  <main>\n    <div class=\"list-container\">\n      <div class=\"task heading\">\n        <p>My Tasks List</p>\n        <i class=\"icon-refresh\"></i>\n      </div>\n      <input id=\"Task-input\" class=\"task list\" type=\"text\" name=\"add-task\" placeholder=\"Add your tasks...\">\n      <ul class=\"task-display\">\n\n      </ul>\n           \n      <div class=\"task complete\">\n        <p id=\"clear-btn\">Clear all completed</p>\n      </div>\n    </div>\n  </main>\n</body>\n\n</html>", {
  url: 'https://localhost/'
});
global.document = domHtml.window.document;
global.window = domHtml.window;
exports.globaldocument = global.document;