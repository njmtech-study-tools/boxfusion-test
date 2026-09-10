# Task 1: Uncontrolled Checkbox Input with useRef

## Assessment Topic
React DOM Ref Handling — Uncontrolled Inputs & `defaultChecked`

---

## 📸 Reference Screenshots
- Assessment Screenshot: `docs/img/IMG_5715.jpeg`
- Gemini Solution Screenshot: `docs/img/IMG_5716.png`

---

## ❓ Problem Statement

Consider the following React functional component:

```jsx
import React, { useRef } from 'react';

function CheckboxComponent() {
  const inputRef = useRef(null);

  const handleChange = () => {
    console.log(inputRef.current.checked);
  };

  return (
    <input 
      type="checkbox" 
      defaultChecked 
      ref={inputRef} 
      onChange={handleChange} 
    />
  );
}
```

When the checkbox is rendered initially, it starts checked (`defaultChecked`). What will be logged to the console when the user clicks the checkbox to uncheck it?

---

## 🔘 Options
1. `null`
2. `false`
3. `true`
4. `undefined`

---

## ✅ Correct Answer
**Option 2: `false`**

---

## 🔍 Detailed Explanation

1. **Uncontrolled Input Pattern**:
   - Specifying `defaultChecked` sets the initial HTML checked attribute without binding React state controlling the element value.
   - `ref={inputRef}` attaches a ref object whose `.current` property references the underlying `<input>` HTML DOM node.

2. **Event Sequence**:
   - The checkbox starts checked.
   - User clicks the checkbox. The browser updates native DOM state (`checked` becomes `false`) and dispatches the `change` event.
   - `handleChange` executes and reads `inputRef.current.checked`, which is now `false`.
