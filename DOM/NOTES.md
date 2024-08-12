The style property is used to access the inline style of an element and the display property is used to set the visibility of an element.

Here is an example of how to update the display for a paragraph element:

Example Code
const paragraph = document.querySelector('p');
paragraph.style.display = 'block';

The innerHTML property allows you to access or modify the content inside an HTML element using JavaScript.

Here is an example of updating the content for this paragraph element using the innerHTML property.

Example Code
<p id="demo">This is a paragraph.</p>
Example Code
document.querySelector("#demo").innerHTML = "Hello, innerHTML!";