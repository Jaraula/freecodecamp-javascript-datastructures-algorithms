/*
Regular Expressions: Remove Whitespace from Start and End
Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.


Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note
The .trim() method would work here, but you'll need to complete this challenge using regular expressions.

result should equal to "Hello, World!"
You should not use the .trim() method.
The result variable should not be set equal to a string.
*/

// Solution
let hello = "   Hello, World!  ";
let wsRegex = /\S.*\S/; // Change this line
let result = hello.match(wsRegex); // Change this line