# 🛠️ Domain 04: State Management & Refs

## Overview
This domain focuses on React state management vs DOM references (`useRef`), uncontrolled input elements (`defaultChecked`, `defaultValue`), mutable variable closures, and state re-render mechanics.

---

## 📋 Task Directory

| Task File | Assessment Topic | Key Concept | Status |
| :--- | :--- | :--- | :---: |
| [task1_uncontrolled_checkbox_refs.md](./task1_uncontrolled_checkbox_refs.md) | Uncontrolled Inputs & `useRef` | Reading DOM `.checked` state with `defaultChecked` | ✅ Verified |
| [task2_local_variable_mutation_closure.md](./task2_local_variable_mutation_closure.md) | Local Var Mutation in Handlers | Local scope mutation vs `useState` re-render triggers | ✅ Verified |
| [task3_useref_dom_element_access.md](./task3_useref_dom_element_access.md) | `useRef` for Input Access | Dereferencing `ref.current.value` on uncontrolled inputs | ✅ Verified |

---

## 🧠 Ref vs State Comparison

| Feature | `useState` | `useRef` |
| :--- | :--- | :--- |
| **Re-renders on change?** | Yes | No |
| **Mutable?** | No (requires `setState`) | Yes (`ref.current = value`) |
| **DOM Element Binding?** | Requires controlled handlers | Direct DOM element attachment (`ref={ref}`) |
| **Primary Use Cases** | Reactive UI data, state state | DOM measurement, timers, uncontrolled inputs |
