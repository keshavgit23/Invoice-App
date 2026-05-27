# Nested Arrays & Objects in JavaScript

## 1. Basic Array of Objects

```js
const items = [
  { name: "x", description: "abc" },
  { name: "y", description: "def" }
];
```

### Accessing Values

```js
items[0].name
```

Output:

```js
"x"
```

---

# 2. Nested Array Structure

```js
const items = [
  [
    { name: "x", description: "abc" }
  ],
  [
    { name: "y", description: "def" }
  ]
];
```

## Visualization

```txt
items
 ├── [0]
 │    └── [0]
 │         └── { name: "x" }
 │
 └── [1]
      └── [0]
           └── { name: "y" }
```

---

# 3. Accessing Nested Values

## First Object Name

```js
items[0][0].name
```

Output:

```js
"x"
```

---

## Second Object Description

```js
items[1][0].description
```

Output:

```js
"def"
```

---

# 4. Common Mistakes

## ❌ Wrong Syntax

```js
items.[0].name
```

## ❌ Wrong Index

```js
items[1][1].description
```

Reason:
`items[1]` contains only one object at index `0`.

## ✅ Correct

```js
items[1][0].description
```

---

# 5. Important Understanding

Every `[]` means:

> Go one level deeper into the structure

Example:

```js
items[1][0].name
```

Breakdown:

| Part | Meaning |
|------|----------|
| `items` | Outer array |
| `[1]` | Second inner array |
| `[0]` | First object inside inner array |
| `.name` | Property from object |

---

# 6. Debugging Tricks

## View Actual Structure

```js
console.log(items);
```

---

## Pretty Print JSON

```js
JSON.stringify(value,replacer,space)
console.log(JSON.stringify(items, null, 2));
```

---

## Table View

```js
console.table(items[0]);
```

---

# 7. Arrays are Objects in JavaScript

```js
typeof []
```

Output:

```js
"object"
```

Because arrays are internally objects.

---

## Proper Array Check

```js
Array.isArray(items)
```

Output:

```js
true
```