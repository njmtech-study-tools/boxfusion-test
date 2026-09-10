# Task 1: Space Complexity of Algorithm with Auxiliary Array

## Assessment Topic
Algorithmic Analysis — Asymptotic Space Complexity & Auxiliary Memory Allocation

---

## 📸 Reference Screenshots
- Assessment Screenshot: `docs/img/A6FF24A1-4652-41C7-8863-4C48641B15B7.jpeg`

---

## ❓ Problem Statement

When evaluating the asymptotic space complexity of an algorithm that creates a dynamic auxiliary array of size $n$, which component primarily determines its space complexity?

```javascript
function processData(arr) {
  let n = arr.length;
  let tempArray = new Array(n);
  for (let i = 0; i < n; i++) {
    tempArray[i] = arr[i] * 2;
  }
  return tempArray;
}
```

---

## 🔘 Options
1. Input parameters passed into the algorithm
2. An auxiliary array of size $n$
3. The value of integer $n$
4. Constant loop control variables

---

## ✅ Correct Answer
**Option 2: An auxiliary array of size $n$**

---

## 🔍 Detailed Explanation

1. **Input vs Auxiliary Space**:
   - Total Space Complexity = Input Space + Auxiliary Space.
   - Auxiliary space complexity specifically evaluates the *extra* memory allocated dynamically by the algorithm during execution.

2. **Asymptotic Growth**:
   - Allocating `tempArray = new Array(n)` creates an auxiliary data structure whose length grows linearly with the input size $n$.
   - Thus, auxiliary space is $O(n)$, which dominates constant scalar variables ($O(1)$) like loop counter `i` or length integer `n`.
