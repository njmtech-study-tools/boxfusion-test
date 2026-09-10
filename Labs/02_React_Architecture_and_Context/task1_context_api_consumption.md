# Task 1: Accessing Context Values in Functional Components

## Assessment Topic
React Context API — Consuming Context via `useContext` Hook

---

## 📸 Reference Screenshots
- Assessment Screenshots: `docs/img/IMG_5712.jpeg`, `docs/img/IMG_5713.jpeg`
- Gemini Solution Screenshot: `docs/img/IMG_5714.png`

---

## ❓ Problem Statement

Given the following React Context setup:

```jsx
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function DisplayTheme() {
  // Line to consume ThemeContext value:
  const theme = useContext(ThemeContext);

  return <div>Current Theme: {theme}</div>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <DisplayTheme />
    </ThemeContext.Provider>
  );
}
```

Which React function is used to consume the value of `ThemeContext` inside the functional component `DisplayTheme`?

---

## 🔘 Options
1. `useContext(ThemeContext)`
2. `createContext(ThemeContext)`
3. `ThemeContext.getValue()`
4. `useProps(ThemeContext)`

---

## ✅ Correct Answer
**Option 1: `useContext(ThemeContext)`**

---

## 🔍 Detailed Explanation

1. **Context API Mechanics**:
   - `React.createContext(defaultValue)` initializes a Context object.
   - `useContext(ContextObject)` accepts the Context object itself as an argument and returns the current context value.

2. **Provider Resolution**:
   - When `useContext(ThemeContext)` is called inside `<DisplayTheme />`, React searches up the component tree for the closest matching `<ThemeContext.Provider>`.
   - Here, `<ThemeContext.Provider value="dark">` is found, so `theme` receives `"dark"`. If no Provider were ancestor, it would fall back to the default value `"light"`.
