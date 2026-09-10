# Task 3: useEffect with Empty Dependency Array `[]`

## Assessment Topic
React Hooks — Component Mount Effect Execution

---

## 📸 Reference Screenshots
- Assessment Screenshot: `docs/img/F765C0BB-67B2-4094-9968-49FE9FBD4E9E.jpeg`
- Gemini Solution Screenshot: `docs/img/IMG_5711.png`

---

## ❓ Problem Statement

In React, when is the effect callback in `useEffect(() => { ... }, [])` executed?

```jsx
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('Effect executed');
  }, []);

  return <h1>Welcome</h1>;
}
```

---

## 🔘 Options
1. On every component re-render
2. Only once after the component mounts
3. Immediately before the component unmounts
4. Synchronously during the initial render phase

---

## ✅ Correct Answer
**Option 2: Only once after the component mounts**

---

## 🔍 Detailed Explanation

1. **Empty Dependency Array (`[]`)**:
   - The second argument to `useEffect` defines the dependencies React watches.
   - An empty array `[]` indicates the effect has zero reactive dependencies.
   - Therefore, React runs the effect callback exactly **once** after the component's initial render and DOM insertion (mount).

2. **Contrast with other signatures**:
   - `useEffect(fn)` (no 2nd arg): Runs after *every* render.
   - `useEffect(fn, [a, b])`: Runs after mount and when `a` or `b` changes.
   - `useEffect(() => () => cleanup, [])`: Cleanup runs once when the component unmounts.
