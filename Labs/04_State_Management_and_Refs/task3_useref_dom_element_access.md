# Task 3: Accessing Input Value via useRef

## Assessment Topic
React Ref Access — Uncontrolled Text Input Dereferencing

---

## 📸 Reference Screenshots
- Assessment Screenshots: `docs/img/IMG_5718.jpeg`, `docs/img/IMG_5719.jpeg`
- Gemini Solution Screenshot: `docs/img/IMG_5720.png`

---

## ❓ Problem Statement

Consider the following component:

```jsx
import React, { useRef } from 'react';

function InputFocusComponent() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    console.log(inputRef.current.value);
  };

  return (
    <input 
      ref={inputRef} 
      defaultValue="hello" 
      onFocus={handleFocus} 
    />
  );
}
```

When the user focuses the text input, what value is logged to the console?

---

## 🔘 Options
1. `"hello"`
2. `null`
3. `undefined`
4. `[object HTMLInputElement]`

---

## ✅ Correct Answer
**Option 1: `"hello"`**

---

## 🔍 Detailed Explanation

1. **DOM Node Binding**:
   - `inputRef` is created with initial value `null`.
   - React attaches the mounted `<input>` element node to `inputRef.current`.

2. **Reading Property**:
   - On focus event, `inputRef.current` points to the `HTMLInputElement`.
   - `.value` retrieves the input's current string value, which is initialized to `"hello"` via `defaultValue`.
   - Result logged: `"hello"`.
