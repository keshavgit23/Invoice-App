# Event Listener vs Returning Values

## Problem

A common mistake is trying to return values directly from inside an `addEventListener()` callback.

Example:

```js
function getItemName() {
    button.addEventListener("click", () => {
        return input.value;
    });
}

console.log(getItemName());

Output:

undefined
Why This Happens
Step 1

getItemName() runs immediately.

getItemName();
Step 2

The event listener is registered.

button.addEventListener("click", callback);

This means:

"When the button is clicked in the future,
execute this callback function."

The callback does NOT run immediately.

Step 3

The outer function finishes execution.

function getItemName() {
    button.addEventListener(...);
}

Since the outer function returns nothing:

undefined

is returned.

Important Concept

This:

return input.value;

returns from the callback function only.

() => {}

NOT from:

getItemName()

The browser ignores the callback return value.

Correct Approach
function getItemName() {
    return input.value;
}

button.addEventListener("click", () => {
    const name = getItemName();

    console.log(name);
});
Responsibility Separation
Event Listener Responsibility
Listen for events
Trigger functions
button.addEventListener("click", handler);
Function Responsibility
Read values
Validate data
Return data
function getItemName() {
    return input.value;
}
Correct Mental Model
User Clicks Button
        ↓
Event Listener Triggers
        ↓
getItemName() Executes
        ↓
Value Returned
        ↓
Data Used
Key Idea
Event Listener = Trigger

Function = Return Data
Benefits of This Structure
Cleaner code
Easier debugging
Better modularity
Reusable functions
Easier scaling in larger projects