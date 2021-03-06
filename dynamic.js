/* eslint-disable no-undef */
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const domHtml = new JSDOM(`
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
  <title>To-Do-List</title>
</head>

<body>
  <main>
    <div class="list-container">
      <div class="task heading">
        <p>My Tasks List</p>
        <i class="icon-refresh"></i>
      </div>
      <input id="Task-input" class="task list" type="text" name="add-task" placeholder="Add your tasks...">
      <ul class="task-display">

      </ul>
           
      <div class="task complete">
        <p id="clear-btn">Clear all completed</p>
      </div>
    </div>
  </main>
</body>

</html>`, { url: 'https://localhost/' });
global.document = domHtml.window.document;
global.window = domHtml.window;
exports.globaldocument = global.document;