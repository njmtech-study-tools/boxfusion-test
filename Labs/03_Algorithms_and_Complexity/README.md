# ⚡ Domain 03: Algorithms & Complexity

## Overview
This domain evaluates algorithmic space and time complexity (Big-O notation), auxiliary memory allocation, circular array rotation algorithms, FIFO queue data structures, and binary search tree key ordering requirements.

---

## 📋 Task Directory

| Task File | Assessment Topic | Key Concept | Status |
| :--- | :--- | :--- | :---: |
| [task1_space_complexity_auxiliary_array.md](./task1_space_complexity_auxiliary_array.md) | Space Complexity Analysis | Primary memory driver identification (auxiliary array of size n) | ✅ Verified |
| [task2_rotate_array_simulation.md](./task2_rotate_array_simulation.md) | Circular Array Rotation Algorithm | Modulo indexing `(i + k) % n` for O(n) right rotation | ✅ Verified |
| [task3_queue_fifo_operations.md](./task3_queue_fifo_operations.md) | Queue FIFO Operations | First-In, First-Out element deletion sequence | ✅ Verified |
| [task4_bst_valid_key_construction.md](./task4_bst_valid_key_construction.md) | BST Construction Validity | Strict total ordering requirement for keys | ✅ Verified |

---

## 🧠 Algorithmic Cheatsheet

```
┌────────────────────────────────────────────────────────┐
│             Asymptotic Complexity Rules                │
├────────────────────────────────────────────────────────┤
│  Auxiliary Space: Extra memory allocated by algo      │
│  Circular Shift:  newIndex = (currentIndex + k) % n    │
│  Queue Pattern:   Enqueue -> [Tail], Dequeue -> [Head] │
│  BST Key Order:   Left < Node < Right (Strict Total)   │
└────────────────────────────────────────────────────────┘
```
