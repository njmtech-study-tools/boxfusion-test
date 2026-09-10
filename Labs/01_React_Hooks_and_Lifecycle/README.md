# 🪝 Domain 01: React Hooks & Lifecycle

## Overview
This domain focuses on modern React functional component execution lifecycles, state updates, side-effects (`useEffect`), dependency arrays, mount/unmount behaviors, and closure scope rules.

---

## 📋 Task Directory

| Task File | Assessment Topic | Key Concept | Status |
| :--- | :--- | :--- | :---: |
| [task1_useeffect_dependencies.md](./task1_useeffect_dependencies.md) | `useEffect` Dependency Array & Re-renders | Effect triggering on prop change & state update isolation | ✅ Verified |
| [task2_conditional_unmounting.md](./task2_conditional_unmounting.md) | Conditional JSX Unmounting | Short-circuit `&&` component lifecycle & state reset | ✅ Verified |
| [task3_useeffect_empty_dependency_array.md](./task3_useeffect_empty_dependency_array.md) | Mount-only Effects `[]` | Running side-effects once on component mount | ✅ Verified |

---

## 🧠 Core Engineering Principles

```
┌────────────────────────────────────────────────────────┐
│             React Component Lifecycle                  │
├────────────────────────────────────────────────────────┤
│  1. Render Phase    -> Execute Component Function      │
│  2. Commit Phase    -> Apply changes to Real DOM       │
│  3. Passive Effects -> Run useEffect callbacks         │
│                        (if dependencies changed)       │
└────────────────────────────────────────────────────────┘
```

1. **Dependency Sensitivity**: `useEffect(fn, [dep])` compares current and previous dependencies via `Object.is()`.
2. **Mount vs Update**: `useEffect(fn, [])` fires only after initial commit phase.
3. **Unmounting cleanup**: When condition in `{condition && <Child />}` switches to `false`, React unmounts `<Child />` and destroys all associated state.
