# SVG Overflow Issue — Documentation

## Problem

The SVG icons were overflowing outside their circular background containers.

Example:

```css
.calender-svg {
    padding: 15px 15px;
    background-color: var(--sub-container-svg-background-color);
    border-radius: 50%;
    height: 30px;
    width: 30px;
}
```

### Expected Behavior

- SVG icon should remain inside a neat circular background.

### Actual Behavior

- The background circle became larger than expected.
- Icons appeared misaligned or overflowing in the flex container.

---

# Root Cause

The issue occurred because of the default CSS box model:

```css
box-sizing: content-box;
```

By default, CSS calculates element size like this:

```txt
Final Width =
width
+ left padding
+ right padding
+ border
```

So this code:

```css
width: 30px;
padding: 15px;
```

actually became:

```txt
30px content width
+ 15px left padding
+ 15px right padding

= 60px total width
```

Same calculation happened for height.

This caused:

- Unexpected element growth
- Overflow inside flex containers
- Circular background becoming too large

---

# Solution

A global reset was already added:

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

With:

```css
box-sizing: border-box;
```

the browser changes the calculation method.

Now:

```txt
Total Width = width property itself
Padding stays INSIDE the width
```

So:

```css
width: 30px;
padding: 15px;
```

remains a total width of 30px.

---

# Improved SVG Styling

Updated version:

```css
.calender-svg,
.shopping-mode-svg,
.payment-svg,
.customer-svg,
.credit-card-svg {
    width: 45px;
    height: 45px;
    padding: 10px;

    background-color: var(--sub-container-svg-background-color);

    border-radius: 50%;

    fill: #1677FF;

    flex-shrink: 0;
}
```

---

# Why This Works

## 1. `box-sizing: border-box`

Makes sizing predictable.

Padding is included inside width and height.

---

## 2. Larger Width & Height

```css
width: 45px;
height: 45px;
```

Provides enough space for:
- icon
- padding
- circular background

without overflow.

---

## 3. Reduced Padding

```css
padding: 10px;
```

Balanced spacing prevents the icon from touching edges.

---

## 4. `flex-shrink: 0`

Prevents SVG icons from shrinking inside flex containers.

Useful when:
- screen width becomes smaller
- flexbox tries to compress items

---

# Important CSS Mistake Found

Incorrect selector:

```css
.issue-date h3,
h2 {
    font-family: var(--font-family);
}
```

This selects:

```txt
.issue-date h3
AND
all h2 elements on the page
```

Correct version:

```css
.issue-date h3,
.issue-date h2 {
    font-family: var(--font-family);
}
```

This issue existed in multiple places.

---

# Best Practice

Always use this reset in modern CSS projects:

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## Benefits

- Predictable layouts
- Easier responsive design
- Fewer overflow bugs
- Better spacing control

---

# Final Learning

The problem was not with SVG itself.

The real issue was:

- CSS box model behavior
- Padding increasing actual element size
- Flex layout reacting to unexpected dimensions

Understanding `box-sizing` is essential for building reliable responsive UI layouts.