# Task 2: Mutating Local Variables in Event Handlers

## Assessment Topic
React Render Mechanics — Local Scope Variables vs React State

---

## 📸 Reference Screenshots
- Assessment Screenshot: `docs/img/IMG_5717.jpeg`

---

## ❓ Problem Statement

What will be logged to the console when the button is clicked in the following component?

```jsx
import React from 'react';

function Counter() {
  let count = 1;

  const handleClick = () => {
    count = 2;
    console.log(count);
  };

  return (
    <button onClick={handleClick}>
      Count: {count}
    </button>
  );
}
```

---

## 🔘 Options
1. `1`
2. `2`
3. `undefined`
4. Throws a TypeError

---

## ✅ Correct Answer
**Option 2: `2`**

---

## 🔍 Detailed Explanation

1. **JavaScript Variable Scope**:
   - `let count = 1` creates a local variable within the component function instance.
   - When the user clicks the button, `handleClick` executes.
   - `count = 2` mutates the local variable `count` to `2`.
   - `console.log(count)` logs the updated local value: `2`.

2. **React Re-render Behavior**:
   - Mutating a local variable does **NOT** trigger a React re-render!
   - The UI text `Count: {count}` remains displaying `Count: 1`.
   - If the component re-renders later (e.g. due to parent state change), `Counter` function runs again from top to bottom, re-initializing `let count = 1`.
