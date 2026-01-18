/* REGULAR EXPRESSIONS */

// A Regular Expression (Regex) is a pattern used to search, match, and manipulate text in strings. Instead of looking for exact words only, regex lets you define rules or pattern that describe what kind of text you want to find.
// The core purpose of Regex is: to find, validate, and modify text based on patters.

/* REGEX LITERALS */

// Regex Literals is a way to write a regular expression directly inside forward slashes (/ /) in JavaScript.
// It is the most common and simplest way to create a regular expression.

var regularText = /hellostudents/;

/* REGEX METHODS */

// Regex Methods are built-in JavaScript functions that work with regular expressions to search, match, or manipulate strings.

// 1) test(): It checks whether a pattern exists in a string or not. It returns true or false.
// It does not return all matches, it just returns true if the regex matches any part of the string.

var text = /hello/;
var regex = "hello world";
var result = text.test(regex);

console.log(result);

// 2) match(): It searches a string and returns the matched results.

var text = "I Love JavaScript";
var regex = /JavaScript/;
var result = console.log(text.match(regex));

console.log(result);

// 3) replace(): Finds a match and replaces it with something else.

var text = "I use JavaScript";
var newText = text.replace(/JavaScript/, "Python");

console.log(newText);

/* CHARACTER CLASSES */

// Character Class allows you to match any one character from a set of characters. Instead of matching a single fixed character, you define a group of possible characters, and regex will match any one character from that group.

// Example 1: Match a, b, or c.
var regex = /[abc]/;
console.log(regex.test("apple"));   // true (matches 'a')
console.log(regex.test("dog")); // false (no a, b or c)

// Example 2: Match a range of characters.
var regex = /[a-z]/;    // any lowercase letter
console.log(regex.test("Hello"));   // true (matches 'e')

var regex = /[0-9]/;
console.log(regex.test("2026"));    // true (matches '2')
console.log(regex.test("year"));    // false (no number present)

// Example 3: Match multiple ranges.
var regex = /[a-zA-Z0-9]/;  // Lowercase, uppercase or digit
console.log(regex.test("G5"));    // true

/* QUANTIFIERS */

// Quantifiers tell regex how many times a character, group, or pattern should appear in a string.

// 1) Zero or more times: Character can appear many times or not appear at all.
var regex = /a*/;
var text = "aaaa";
console.log("1.1: ", regex.test(text));    // true
console.log("1.2: ", regex.test(""));  // true

// 2) One or more times: Character must appear at least once.
var regex = /a+/;
var text = "aaaa";
console.log("2.1: ", regex.test(text));    // true
console.log("2.2: ", regex.test(""));  // false

// 3) Zero or one time: Character may appear once or may not appear at all.
var regex = /colou?r/;
console.log("3.1: ", regex.test("color")); // true
console.log("3.2: ", regex.test("colour"));    // true

// 4) Exactly n times: Character must appear give number of times.
var regex = /a{3}/;
console.log("4.1: ", regex.test("aaa"));   // true
console.log("4.2: ", regex.test("aa"));    // false

// 5) At least n times: Character must appear at least given number of times.
var regex = /a{2,}/;
console.log("5.1: ", regex.test("aa"));    // true
console.log("5.2: ", regex.test("aaaa"));    // true
console.log("5.3: ", regex.test("a")); // false

// 6) Between n and m times: Character must appear between n to m times.
var regex = /a{2,4}/;
console.log("6.1: ", regex.test("aa"));    // true
console.log("6.2: ", regex.test("aaa"));   // true
console.log("6.3: ", regex.test("aaaa"));  // true
console.log("6.4: ", regex.test("aaaaa")); // false    (In order for this to be false, we need ANCHORS, next sub-topic)

/* ANCHORS */

// Anchors are special symbols in regular expressions that do not match characters, but instead match specific positions within a string, namely the start or the end of the string.
// It controls where a pattern must appear in a string, not what characters are matched.
// ^: Start of the string.
// $: End of the string.

// 1) Start Anchor (^): The match must begin at the very start of the string.
var regex = /^hello/;
console.log("Start Anchor, 1.1: ", regex.test("hello world")); // true
console.log("Start Anchor, 1.2: ", regex.test("say hello"));   // false

// 2) End Anchor ($): The match must end at the very end of the string.
var regex = /world$/;
console.log("End Anchor, 2.1: ", regex.test("hello world"));   // true
console.log("End Anchor, 2.2: ", regex.test("world today"));   // false

// 3) Using Both Together: Match the entire string.
var regex = /^hello$/;
console.log("Both Anchors, 3.1: ", regex.test("hello"));   // true
console.log("Both Anchors, 3.2: ", regex.test("hello world")); // false
console.log("Both Anchors, 3.3: ", regex.test("say hello"));   // false

/* REGEX FLAGS */

// Flags (also called modifiers) are letters added after a regex literal that change how the regular expression behaves when matching text.
// They do not change the pattern itself, they change how the pattern is applied to the string.

// 1) Global Flag (g): It tells regex to find all matches in the string, not just the first one.
var text = "cat cat cat";
var result = text.match(/cat/);
console.log("Global Flag (g), 1.1: ", result);

// 2) Case-Insensitive Flag (i): It makes the match ignore letter case (uppercase/lowercase).
var regex = /hello/i;
console.log("Case-Insensitive Flag (i), 2.1: ", regex.test("HELLO"));
console.log("Case-Insensitive Flag (i), 2.2: ", regex.test("Hello"));
console.log("Case-Insensitive Flag (i), 2.3: ", regex.test("hello"));

// 3) Multi-Line Flag (m): It changes how `^` and `$` works.
// Without m -> ^: Start of entire string, $: End of entire string.
// With m -> ^: Start of each line, $: End of each line.
var text = `apple
banana
cherry`;
console.log("Multi-Line Flag (m), 3.1: ", text.match(/^banana/));   // null
console.log("Multi-Line Flag (m), 3.2: ", text.match(/^banana/m));  // banana