There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

The second way to access the properties of an object is bracket notation ([]). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

Example Code
objectName["property name"];
Here is a sample of using bracket notation to read an object's property:

Example Code
const spaceObj = {
  "Space Name": "Kirk",
};

spaceObj["Space Name"]; // "Kirk"

There is a shorthand way to add or subtract from a variable called compound assignment. For example, changing num = num + 5 to compound assignment would look like num += 5.