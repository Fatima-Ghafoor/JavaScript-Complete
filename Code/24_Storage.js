/* LOCAL STORAGE */

// Local Storage is a Web Storage API that allows web applications to store data in the user's browser as key-value pairs.
// The data persists even after the browser is closed or the system is restarted, until it is explicitly removed.
// It is browser-based storage, not direct system (OS) storage.

// EXAMPLE: Store, Read, Update, and Remove Data.

// 1) Save user preferences
const userPreferences = {
    theme: "dark",
    language: "en"
};
localStorage.setItem("preferences", JSON.stringify(userPreferences));

// 2) Read user preferences
const savedPreferences = JSON.parse(localStorage.getItem("preferences"));
console.log(savedPreferences);

// 3) Update a value
savedPreferences.theme = "light";
localStorage.setItem("preferences", JSON.stringify(savedPreferences));

// 4) Remove specific data
localStorage.removeItem("preferences");

// 5) Clear all Local Storage Data
localStorage.clear();

/* SESSION STORAGE */

// Session Storage is a Web Storage API that allows web applications to store data as key-value pairs in the browser for the duration of a single session. The stored data is available only within the current browser tab and is automatically cleared when the tab or browser is closed.

// EXAMPLE: Store, Read, Update, and Remove Data.

// 1) Save temporary session data
const sessionData = {
    step: 2,
    username: "Ayesha"
}
sessionStorage.setItem("sessionInfo", JSON.stringify(sessionData));

// 2) Read session data
const savedSession = JSON.parse(sessionStorage.getItem("sessionInfo"));
console.log(savedSession);

// 3) Update session data
savedSession.step = 3;
sessionStorage.setItem("sessionInfo", JSON.stringify(savedSession));

// 4) Remove specific session data
sessionStorage.removeItem("sessionInfo");

// 5) Clear all Session Storage Data
sessionStorage.clear();

/* COOKIES */

// Cookies are small pieces of data stored in the browser and sent to the server with every HTTP request. They are mainly used to identify users, manage sessions, and store small amounts of data.

// EXAMPLE:

// 1) Create a cookie
document.cookie = "username=Sara; expires=Fri, 31 Dec 2027 23:59:59 UTC; path=/";

// 2) Read cookies
console.log(document.cookie);

// 3) Update a cookie
document.cookie = "username=Sara; expires=Fri, 31 Dec 2027 23:59:59 UTC; path=/";

// 4) Delete a cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";