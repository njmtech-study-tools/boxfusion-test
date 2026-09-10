# 🏗️ Domain 02: React Architecture & Context API

## Overview
This domain covers component hierarchy design, prop drilling mitigation, state sharing using React Context API (`React.createContext`, `<Context.Provider>`, `useContext`), and component composition pattern best practices.

---

## 📋 Task Directory

| Task File | Assessment Topic | Key Concept | Status |
| :--- | :--- | :--- | :---: |
| [task1_context_api_consumption.md](./task1_context_api_consumption.md) | Context Consumption via `useContext` | Reading global theme/user state without prop drilling | ✅ Verified |
| [task2_props_vs_context.md](./task2_props_vs_context.md) | Props vs Context Tradeoffs | Choosing between explicit prop passing and contextual dependency | ✅ Verified |

---

## 🧠 Core Architecture Patterns

```
┌────────────────────────────────────────────────────────┐
│                   Context Architecture                 │
├────────────────────────────────────────────────────────┤
│                  <ThemeContext.Provider>               │
│                            │                           │
│        ┌───────────────────┴───────────────────┐       │
│        ▼                                       ▼       │
│   <Header />                             <MainContent> │
│  (no props)                              (useContext)  │
└────────────────────────────────────────────────────────┘
```

1. **Context Creation**: `const Context = React.createContext(defaultValue);`
2. **Context Provision**: `<Context.Provider value={currentValue}>` wraps child subtrees.
3. **Context Consumption**: `const val = useContext(Context);` reads the nearest matching Provider value.
