# Task 1: useEffect Dependency Array & Re-render Log Count

## Assessment Topic
React Hooks — `useEffect` Dependency Evaluation & State Update Behavior

---

## 📸 Reference Screenshots
- Assessment Screenshot: `docs/img/IMG_5705.jpeg`
- Gemini Solution Screenshot: `docs/img/IMG_5706.png`

---

## ❓ Problem Statement

Consider the following React functional component:

```jsx
import React, { useState, useEffect } from 'react';

function PracticeComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (props.visible) {
      console.log('Hello');
      setCount(1);
    }
  }, [props.visible]);

  return <div>{count}</div>;
}
```

Assume `props.visible` starts as `false` and then changes to `true`. How many times is `'Hello'` logged to the console?

---

## 🔘 Options
1. `0` times
2. `1` time
3. `2` times
4. Infinitely

---

## ✅ Correct Answer
**Option 2: 1 time**

---

## 🔍 Detailed Explanation

1. **Initial Mount (`props.visible = false`)**:
   - The component mounts. `useEffect` executes because it is the initial render.
   - Inside the effect: `props.visible` is `false`, so `if (props.visible)` block does NOT execute. Nothing is logged.

2. **Prop Update (`props.visible = true`)**:
   - The parent updates `props.visible` to `true`.
   - Component re-renders with `props.visible = true`.
   - `useEffect` checks dependency array `[props.visible]`. Since `false !== true`, the effect fires.
   - `console.log('Hello')` executes -> **Log Count = 1**.
   - `setCount(1)` is called.

3. **State Change Re-render**:
   - `setCount(1)` triggers a re-render with `count = 1`.
   - Component re-renders.
   - `useEffect` checks dependency array `[props.visible]`.
   - `props.visible` is still `true` (unchanged from the previous render).
   - React skips the effect callback! `'Hello'` is NOT logged again.

Total console output: **1 time**.
