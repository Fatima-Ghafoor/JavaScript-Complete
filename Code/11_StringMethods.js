/* STRINGS & INDEXING */

// String: It is a sequence of characters enclosed in a single ('), double ("), or backticks (```) in JavaScript.

let fullName = "Sara Ahmed";
console.log(fullName);

// Indexing: Each character in a string has a position called an index, starting from 0. You can access characters using bracket notation [].

/* ESCAPE CHARACTERS */

// They are the special characters used in strings to represent characters that are difficult or impossible to type directly, like newlines, tabs, quotes, or backslashes.
// They are written with a backslash \ followed by a character.

// Following are the Escape Characters with codes:
// \n: new line
// \t: tab space
// \r: carriage return (moves cursor to the start of line)
// \': single quote
// \": double quote
// \\: backslash
// \b: backspace
// \f: form feed (new page in some contexts)
// \v: vertical tab

console.log("Hello\nWorld"); // Prints on two lines
console.log("Name:\tAlice");  // Adds a tab space before Alice
console.log("He said, \"Hi!\""); // Prints quotes inside string
console.log("Backslash: \\");  // Prints a backslash

/* TEMPLATE LITERALS */

// Template literals are a modern way to create strings in JavaScript using backticks (`) instead of quotes. They allowed embedded expressions and multi-line strings easily.
// They can also include variables, expressions, or function calls inside strings using ${}.

let message = `Hello,
Welcome to Japan!`;
console.log(message);

let name = "Asmara";
let age = 25;
let greeting = `My name is ${name} and I am ${age} years old!`;
console.log(greeting);

/* ACCESS & EXTRACTION */

// 1) charAt(): Returns the character at the specified index in a string.
var text = "JavaScript";
var desiredLetter = text.charAt(4);
console.log(desiredLetter);
var desiredLetter = text.charAt(6);
console.log(desiredLetter);

// 2) charCodeAt(): Returns the UTF-16 code (numeric Unicode value) of the character at the specified index.
var desiredLetterCode = text.charCodeAt(4);
console.log(desiredLetterCode);
var desiredLetterCode = text.charCodeAt(6);
console.log(desiredLetterCode);

// 3) codePointAt(): Returns the Unicode code point of the character at the specified index.
// It can handles the characters from different languages, historic scripts, musical symbols, mathematical symbols and dingbats.
let emoji = "😎";
var desiredCharacterCode = emoji.codePointAt(0);
console.log(desiredCharacterCode);
let music = "𝄞";
var desiredCharacterCode = music.codePointAt(0);
console.log(desiredCharacterCode);

// 4) length: Returns the number of characters in the string.
var getLength = text.length;
console.log(getLength);

/* SEARCHING */

// 1) includes(searchValue, start): Checks if a string contains the searchValue. Returns true or false.
// Second parameter is optional. Search results are case-sensitive.
var text = "JavaScript";
var searchResult = text.includes("Sc");
console.log(searchResult);

// 2) indexOf(searchValue, start): Returns the index of the first occurrence of searchValue. Returns -1 if not found.
var searchResult = text.indexOf("v");
console.log(searchResult);

// 3) lastIndexOf(searchValue, start): Returns the index of the last occurrence of searchValue.
var searchResult = text.lastIndexOf("a");
console.log(searchResult);

// 4) startsWith(searchValue, start): Checks if the string starts with searchValue. Returns true or false.
var searchResult = text.startsWith("J");
console.log(searchResult);

// 5) endsWith(seearchValue, length): Checks if the string ends with searchValue. Returns true or false.
var searchResult = text.endsWith("Script");
console.log(searchResult);

// 6) search(regexp): Searches the string using a regular expression Returns the index of the match or -1.
var searchResult = text.search(/Script/);   // case-sensitive
console.log(searchResult);
var searchResult = text.search(/scRIpt/i);  // case-insensitive
console.log(searchResult);

// 7) match(regexp): Returns an array of matches for the given regex. Returns null if no match.
var searchResult = "Hello 123 World".match(/\d+/);
console.log(searchResult);

// 8) matchAll(regexp): Returns all matches with details (including capture groups). Returns an iterator.
const str = "a1 b2 c3";
var searchResult = str.matchAll(/\d/g);
console.log([...searchResult]);

// 9) localeCompare(compareString): Compares two strings according to the locale. Returns:
// 0 -> strings are equal
// <0 -> reference string comes before compareString
// >0 -> reference string comes after compareString
var searchResult = "apple".localeCompare("banana");
console.log(searchResult);

/* EXTRACTING SUBSTRING */

// 1) slice(start, end): Extracts a portion of the string from start to end.
// Also supports the negative indexes (counts from the end), does not change the original string.
var text = "JavaScript";
var extractResult = text.slice(0, 4);
console.log(extractResult);
var extractResult = text.slice(4);
console.log(extractResult);
var extractResult = text.slice(-7);
console.log(extractResult);

// 2) substring(start, end): It extracts a portion of string from start to before end (not including end).
// It does not allow negative numbers (if added, it will treat it as 0) -> text.substring(-2, 3), -2 will be treated as 0.
// If start > end, it will swap the value -> text.substring(4, 1), will treat as (1, 4).
var extractResult = text.substring(0, 5);
console.log(extractResult);

// 3) substr(start, length): Extracts substring starting from start for length characters.
// Note: Officially deprecated, but still used in old code.
var extractResult = text.substr(0, 3);
console.log(extractResult);

// 4) split(separator, limit): Splits string into an array based on a separator.
let letters = "Aa, Bb, Cc, Dd, Ee, Ff, Gg";
var extractResult = letters.split(",");
console.log(extractResult);

// 5) concat(string1, string2): Joins two or more strings together.
let str1 = "Welcome";
let str2 = "to Japan!";
var concatResult = str1.concat(" ", str2);
console.log(concatResult);

/* MODIFYING & FORMATTING */

// 1) toUpperCase(): Converts all characters to uppercase.
var title = "Programmer";
var modifyResult = title.toUpperCase();
console.log(modifyResult);

// 2) toLowerCase(): Converts all characters to lowercase.
var modifyResult = title.toLowerCase();
console.log(modifyResult);

// 3) trim(): Removes spaces from both ends of the string.
var sampleText = "   Hello!   ";
console.log(sampleText);
var modifyResult = sampleText.trim();
console.log(modifyResult);

// 4) trimStart()/trimLeft(): Removes spaces from the start only.
// trimLeft() is deprecated now. So, use trimStart().
var modifyResult = sampleText.trimStart();
console.log(modifyResult);
var modifyResult = sampleText.trimLeft();
console.log(modifyResult);

// 5) trimEnd()/trimRight(): Removes spaces from the end only.
// trimRight() is deprecated now. So, use trimStart().
var modifyResult = sampleText.trimEnd();
console.log(modifyResult);
var modifyResult = sampleText.trimRight();
console.log(modifyResult);

// 6) replace(searchValue, newValue): Replaces the first match of a string or regex.
var fruitText = "banana banana";
var modifyResult = fruitText.replace("banana", "delicious");
console.log(modifyResult);

// 7) replaceAll(searchValue, newValue): Replaces all matches.
var modifyResult = fruitText.replace("banana", "delicious");
console.log(modifyResult);

// 8) normalize(form): Fixes unicode characters for consistent internal representation.
var modifyResult = "é".normalize();
console.log(modifyResult);

// 9) padStart(targetLength, padString): Adds padding at the start until string reaches target length.
var modifyResult = "5".padStart(10, "0");
console.log(modifyResult);

// 10) padEnd(targetLength, padString): Adds padding at the end until string reaches target length.
var modifyResult = "5".padEnd(10, "0");
console.log(modifyResult);

/* TEMPLATE & ENCODING */
// 1) toString(): Converts the string object to a regular string.
var sampleText = new String("Hello!");
sampleText.toString();

// 2) valueOf(): Returns the primitive (real) string value of a String object.
// Works similarly to 'toString()'.
var sampleText = new String("Hello!");
sampleText.valueOf();

// 3) toLocaleUpperCase(): Converts a string to uppercase based on local language rules.
var cityName = "Istanbul";
var encodingResult = cityName.toLocaleUpperCase("tr");
console.log(encodingResult);

// 4) toLocaleLowerCase(): Converts a string to lowercase based on local language rules.
var cityName = "Istanbul";
var encodingResult = cityName.toLocaleLowerCase("tr");
console.log(encodingResult);

// 5) escape(): Converts certain characters into old-style % codes (Not recommended anymore).
var sampleText = "Hello World!";
// var encodingResult = sampleText.escape();   // Possibility of Error (due to deprecated)
console.log(encodingResult);

// 6) unescape(): Rverses escape() to its original form.
// var encodingResult = encodingResult.unescape(); // Possibility of Error (due to deprecated)
console.log(encodingResult);

// 7) encodeURI(): Encodes a full URI.
// Does not encode characters like : / ? & = (because they are part of URLs).
var pageLink = "https://example.com/my page";
var encodingResult = encodeURI(pageLink);
console.log(encodingResult);

// 8) encodeURIComponent(): Encodes a part of an URL (query values).
// Encodes almost everything, including ? & = /.
var pageLink = "https://example.com/my page";
var encodingResult = encodeURIComponent(pageLink);
console.log(encodingResult);

// 9) decodeURI(): Decodes text encoded with 'encodeURI()'.
var pageLink = "https://example.com/my%20page";
var decodingResult = decodeURI(pageLink);
console.log(decodingResult);

// 10) decodeURIComponent(): Decodes text encoded with 'encodeURIComponent()'.
var pageLink = "my%20page%3Fname%3Dali";
var decodingResult = decodeURIComponent(pageLink);
console.log(decodingResult);