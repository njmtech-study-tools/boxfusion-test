# Task 2: Rotate Array (Children's Game Simulation)

## Assessment Topic
Algorithmic Problem Solving — Circular Array Right Shift via Modulo Arithmetic

---

## 📸 Reference Screenshots
- Assessment Screenshots: `docs/img/IMG_5739.jpeg`, `docs/img/IMG_5743.jpeg`, `docs/img/IMG_5745.jpeg`
- Gemini Solution Screenshot: `docs/img/IMG_5740.png`

---

## ❓ Problem Statement

Children are standing in a straight line with numbers on their shirts. There are $n$ children total.
When the captain calls out a number $k$, each child moves $k$ positions to their right in line. Children who move off the right end wrap around to the left end.

Write a function `rotateArray(n, k, arr)` that returns the new array arrangement after $k$ shifts.

### Example 1:
- Input: `n = 5`, `k = 2`, `arr = [1, 2, 3, 4, 5]`
- Output: `[4, 5, 1, 2, 3]`

### Example 2:
- Input: `n = 3`, `k = 1`, `arr = [8, 9, 10]`
- Output: `[10, 8, 9]`

---

## 💻 Optimal Solution (C# / JavaScript)

```csharp
using System;

class Program {
    public static int[] rotateArray(int n, int k, int[] arr) {
        int shift = k % n; // Normalize shift if k > n
        int[] result = new int[n];

        for (int i = 0; i < n; i++) {
            int newIndex = (i + shift) % n;
            result[newIndex] = arr[i];
        }

        return result;
    }
}
```

---

## ⚠️ Common Pitfall & Bug Analysis

In screenshot `docs/img/IMG_5745.jpeg`, an initial attempt wrote:
```csharp
int idx = i + shift; // Missing % n wrap-around!
res[idx] = arr[i];
```
This threw `Unhandled Exception: System.IndexOutOfRangeException` because `i + shift` exceeds array length $n$ when elements wrap around! Always apply `% n` modulo indexing.

---

## 📊 Complexity Analysis
- **Time Complexity**: $O(n)$ — Single pass through array of length $n$.
- **Space Complexity**: $O(n)$ — Auxiliary array `result` of size $n$.
