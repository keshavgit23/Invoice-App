📘 Flexbox Stretch Issue (Why your SVG background became vertical)
🧩 Problem Summary

When using Flexbox, a child element (like your .calender-svg) unexpectedly stretches vertically, causing its background to appear as a tall rectangle instead of wrapping tightly around its content.

🧠 Root Cause
Default Flexbox Behavior:
align-items: stretch;

👉 This is applied automatically to every flex container.

⚙️ What “stretch” actually means

All flex children will expand to match the height of the tallest item.

🔬 Your Case Breakdown
Parent:
.box-1 {
    display: flex;
    flex-direction: row;
}
Children:
<div class="calender-svg">...</div>
<div class="issue-date">...</div>
What happens internally:
.issue-date has:
<h3> + <h2>
→ naturally taller

Flexbox calculates:

tallest child height = issue-date
Then applies:
calender-svg height = issue-date height
Final Result:
| calender-svg (stretched) |
|                          |
|        SVG icon          |
|                          |
|                          |

👉 Background fills full height → looks like a vertical strip

🧪 How to Debug This
Step 1: Add border
.calender-svg {
    border: 2px solid red;
}

👉 You’ll see the actual stretched box

Step 2: Inspect in DevTools

Check:

computed height
flexbox alignment rules
🛠 Solutions
✅ Solution 1: Stop stretching (most common)
.box-1 {
    align-items: flex-start;
}

✔ Children take only needed height
✔ Background wraps content

✅ Solution 2: Control single element
.calender-svg {
    align-self: flex-start;
}

✔ Only this element avoids stretching

✅ Solution 3: Center alignment (UI friendly)
.box-1 {
    align-items: center;
}

✔ Icon aligns nicely with text
✔ No vertical stretching

🎯 When This Problem Usually Happens

This is very common in:

Card layouts
Icon + text rows
Buttons with icons
Sidebar items
Dashboard UI
🚨 Common Mistake

Thinking:

"My SVG is big"

Reality:

"My flex item is stretched"
🧠 Mental Model (Important)

Instead of thinking:

“Why is background behaving weird?”

Think:

Flex container → controls child size
NOT the child itself
🧭 Rule to Remember
If something looks stretched in flexbox →
Check align-items first
💡 Pro Tip

Whenever you create a flex row:

display: flex;

👉 Immediately decide:

align-items: ?

Don’t leave it to default.

📌 Your Specific Fix

For your layout:

.box-1 {
    display: flex;
    flex-direction: row;
    align-items: center; /* or flex-start */
}
🚀 What You Just Learned
Hidden default of flexbox (align-items: stretch)
How layout affects background rendering
Debugging using borders + devtools
Controlling vertical alignment properly