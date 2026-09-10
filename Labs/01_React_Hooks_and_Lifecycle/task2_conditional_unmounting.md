# Task 2: Conditional JSX Unmounting & Lifecycle

## Assessment Topic
React JSX Rendering — Conditional Unmounting via Short-Circuit Operator `&&`

---

## 📸 Reference Screenshots
- Assessment Screenshot: `docs/img/IMG_5707.jpeg`
- Gemini Solution Screenshot: `docs/img/IMG_5708.png`

---

## ❓ Problem Statement

Consider the following React component structure:

```jsx
import React, { useState } from 'react';

function MyChild() {
  React.useEffect(() => {
    console.log('Child Mounted');
    return () => console.log('Child Unmounted');
  }, []);

  return <div>Child Component</div>;
}

function Parent() {
  const [value, setValue] = useState(1);

  return (
    <div>
      <button onClick={() => setValue(3)}>Set 3</button>
      <button onClick={() => setValue(1)}>Set 1</button>
      {value === 3 && <MyChild />}
    </div>
  );
}
```

What happens to `<MyChild />` when `value` changes from `3` to `1`?

---

## 🔘 Options
1. `<MyChild />` remains mounted in the DOM but hidden via CSS
2. `<MyChild />` is unmounted and its cleanup functions execute
3. `<MyChild />` re-renders without unmounting
4. Throws a React reconciliation syntax error

---

## ✅ Correct Answer
**Option 2: `<MyChild />` is unmounted and its cleanup functions execute**

---

## 🔍 Detailed Explanation

1. **Short-Circuit Evaluation**:
   - In React JSX, `{condition && <Component />}` evaluates to `false` when `condition` is `false`.
   - React treats `false`, `null`, `undefined`, and `true` as empty nodes, rendering nothing to the DOM.

2. **Unmount & Cleanup**:
   - When `value` transitions from `3` to `1`, React compares the new VDOM tree with the previous VDOM tree.
   - The `<MyChild />` element is missing in the new tree.
   - React invokes all `useEffect` cleanup callbacks registered by `<MyChild />` (logging `'Child Unmounted'`).
   - The underlying DOM element is removed from the real DOM, and state internal to `<MyChild />` is destroyed.
