# Assessment Images Comprehensive Analysis Report

This document contains detailed extraction and technical analysis of assessment questions from image sets located in `docs/img/`.

---

## Set 1: Sparse Matrix Multiplication

- **Image Files**: `IMG_5758.jpeg` (Question) & `IMG_5759.png` (Explanation)
- **Question Title**: Non-Zero Elements in Sparse Matrix Multiplication
- **Topic / Category**: Data Structures & Algorithms — Sparse Matrices / Matrix Operations

### Problem Statement
> Two $10 \times 10$ matrices contain five non-zero elements each. These matrices are stored in their 3-tuple form. On multiplying these matrices, how many non-zero elements would the resultant 3-tuple matrix contain?

### Choice Options
1. More than 5
2. Less than 5
3. Exactly 5
4. It depends on the result of the multiplication and the position of non-zero elements.

### Correct Answer
**Option 4**: *It depends on the result of the multiplication and the position of non-zero elements.*

### Technical Explanation
In matrix multiplication $C = A \times B$, each element $C_{i,j}$ is computed as:
$$C_{i,j} = \sum_{k=1}^{n} A_{i,k} \cdot B_{k,j}$$

A non-zero product term $A_{i,k} \cdot B_{k,j}$ is produced **only when** a non-zero element at column $k$ in matrix $A$ aligns with a non-zero element at row $k$ in matrix $B$.
- **Best/Worst Case Alignment**:
  - If no column index of $A$'s non-zero entries matches any row index of $B$'s non-zero entries, the resulting matrix $C$ will have **0 non-zero elements**.
  - If multiple products align at the same $(i,j)$ coordinate, their numerical values could sum up to zero (canceling out) or form up to 25 distinct non-zero entries depending on layout.
- Therefore, the number of non-zero elements in the resultant 3-tuple representation cannot be determined solely from the count of non-zero elements in input matrices; it strictly depends on their **positions and values**.

---

## Set 2: Singly Linked List Node Deletion

- **Image Files**: `IMG_5760.jpeg` (Question) & `IMG_5761.png` (Explanation)
- **Question Title**: Deletion of a Node in Singly Linked List
- **Topic / Category**: Data Structures — Singly Linked Lists

### Problem Statement
> A linked list contains the nodes A, B, C, D, E, F, G, H, and a pointer `p` points to node A. Which of the following steps would you perform to delete node D?

### Choice Options
1. Copy `p` into pointers `q` and `r`, make `q` point to D and `r` point to C, set `r->next` with `q->next`, and delete D using `q`.
2. Don't move `p`; use `p->next` to traverse, set `p->next` of C to `q->next` of E.
3. Move `p` to point to node D and then delete it.
4. Copy `p` into pointer `q`, move `q` to D, set `q->next` to null, and delete `q`.

### Correct Answer
**Option 1**: *Copy `p` into pointers `q` and `r`, make `q` point to D and `r` point to C, set `r->next` with `q->next`, and delete D using `q`.*

### Technical Explanation
Deleting node D from a singly linked list requires maintaining list connectivity:
1. Two pointers are needed: pointer `r` pointing to the predecessor node (C) and pointer `q` pointing to the node to delete (D).
2. The `next` reference of node C (`r->next`) is updated to point to the node after D, which is `q->next` (node E).
3. Node D is then safely deallocated/freed from memory via `q` without losing access to the remainder of the list.

```
Before: ... -> [C (r)] -> [D (q)] -> [E] -> ...
Action: r->next = q->next; delete q;
After:  ... -> [C (r)] -----------> [E] -> ...
```

---

## Set 3: Circular Queue Indexing

- **Image Files**: `IMG_5762.jpeg`, `IMG_5763.jpeg` (Question) & `IMG_5764.png` (Explanation)
- **Question Title**: Circular Queue Pointer Movement After Deletion
- **Topic / Category**: Data Structures — Circular Queue (Array Implementation)

### Problem Statement
> A circular queue is implemented using an array of 10 elements. If the front of the queue is at index 5 and the rear is at index 9, where would the front of the queue move to after deleting an element?

### Choice Options
1. Index 6
2. Index 9
3. Index 0
4. Index 5

### Correct Answer
**Option 1**: *Index 6*

### Technical Explanation
In an array implementation of a circular queue with array capacity $N = 10$:
- Deletion (dequeue) occurs at the `front` index.
- When an item is deleted, the `front` pointer advances to the next index using modulo arithmetic:
  $$\text{front}_{\text{new}} = (\text{front}_{\text{old}} + 1) \pmod{N}$$
- Substituting the given values:
  $$\text{front}_{\text{new}} = (5 + 1) \pmod{10} = 6$$

---

## Set 4: Graph Spanning Trees

- **Image Files**: `IMG_5765.jpeg` (Question) & `IMG_5766.png` (Explanation)
- **Question Title**: Spanning Tree Identification
- **Topic / Category**: Graph Theory — Spanning Trees

### Problem Statement
> A graph is shown on the left of the image below, along with four spanning trees labeled A, B, C, and D. Which is the correct spanning tree for the graph shown?

*(Original Graph: 5 vertices labeled 1, 2, 3, 4, 5 connected with various edges)*

### Choice Options
1. Spanning Tree A
2. Spanning Tree B
3. Spanning Tree C
4. Spanning Tree D

### Correct Answer
**Option 4**: *Spanning Tree D*

### Technical Explanation
A valid **Spanning Tree** for a connected graph $G = (V, E)$ with $|V|$ vertices must satisfy the following formal properties:
1. **Vertex Coverage**: It must contain all $|V| = 5$ vertices of graph $G$.
2. **Edge Count**: It must contain exactly $|V| - 1 = 4$ edges.
3. **Acyclic Connectivity**: It must be fully connected and contain **no cycles**.
4. **Subgraph Property**: Every edge in the spanning tree must exist in the original graph $G$.

Graph D satisfies all these criteria: it connects all 5 vertices using 4 original edges without forming any cycles.

---

## Set 5: Binary Tree Traversals

- **Image Files**: `IMG_5767.jpeg` (Question) & `IMG_5768.png` (Explanation)
- **Question Title**: Root Node Identification from Tree Traversals
- **Topic / Category**: Data Structures — Binary Tree Traversals

### Problem Statement
> - **In-order traversal**: C, D, B, F, E, A, H, I, G
> - **Pre-order traversal**: A, B, C, D, E, F, G, H, I
>
> Which is the root node of the binary tree?

### Choice Options
1. C
2. A
3. F
4. D

### Correct Answer
**Option 2**: *A*

### Technical Explanation
- **Pre-order Traversal Definition**: $\text{Root} \rightarrow \text{Left Subtree} \rightarrow \text{Right Subtree}$.
- In pre-order sequence, the **first visited element** is always the root node of the entire tree.
- Since the pre-order traversal sequence begins with **A**, node **A** is the root node.
- Locating **A** in the in-order traversal ($\text{Left Subtree} \rightarrow \text{Root} \rightarrow \text{Right Subtree}$) splits the tree into:
  - Left Subtree: `{C, D, B, F, E}`
  - Right Subtree: `{H, I, G}`

---

## Set 6: Hash Table Time Complexity

- **Image Files**: `IMG_5769.jpeg` (Question) & `IMG_5770.png` (Explanation)
- **Question Title**: Hash Table Operations Average Time Complexity
- **Topic / Category**: Data Structures — Hash Tables / Time Complexity Analysis

### Problem Statement
> What is the average time complexity of deletion and insertion operations on a hash table?

### Choice Options
1. $O(\log n)$
2. $O(n \log n)$
3. $O(1)$
4. $O(n)$

### Correct Answer
**Option 3**: *$O(1)$*

### Technical Explanation
- A hash table uses a hash function to map a key directly to an index in an array.
- Under the assumption of uniform hashing and a reasonable load factor (with collision resolution like chaining or open addressing), direct key computation allows lookup, insertion, and deletion to be performed in **$O(1)$ average time complexity**.
- Worst-case time complexity is $O(n)$ (when all keys hash to the exact same bucket), but the average time complexity is $O(1)$.

---

## Set 7: Word Lookup Data Structure

- **Image Files**: `IMG_5771.jpeg` (Question) & `IMG_5772.png` (Explanation)
- **Question Title**: Optimal Data Structure for Dictionary Search
- **Topic / Category**: Data Structures — Tries / String Search Algorithms

### Problem Statement
> You want to store 10,000 English words and then check whether a given word exists in the list. Which data structure should you use for this operation?

### Choice Options
1. Binary search tree
2. Trie
3. Queue
4. Stack

### Correct Answer
**Option 2**: *Trie*

### Technical Explanation
- A **Trie** (Prefix Tree) is an optimal data structure for storing dictionaries and performing string lookups.
- **Lookup Complexity**: $O(L)$, where $L$ is the length of the word being searched. It is independent of $N$ (the total number of words, e.g., 10,000).
- **Comparison**:
  - Binary Search Tree: $O(L \log N)$ average search time.
  - Queue / Stack: $O(N \cdot L)$ linear search time.
- Tries also share common prefixes, significantly reducing redundant character storage across dictionary entries.

---

## Set 8: Search Algorithms & Big-O Constants

- **Image Files**: `IMG_5773.jpeg` (Question 1), `IMG_5774.jpeg` (Question 2) & `IMG_5775.png` (Explanation)

### Question 1 (`IMG_5773.jpeg`)
- **Question**: Which search algorithm does not need an array to be sorted?
- **Options**: (1) Binary search, (2) Linear search, (3) Interpolation search, (4) Jump search
- **Correct Answer**: **Linear search** (Scans elements sequentially in $O(N)$ time regardless of order).

---

### Question 2 (`IMG_5774.jpeg` & `IMG_5775.png`)
- **Question Title**: Big-O Asymptotic Constants $c$ and $n_0$
- **Topic / Category**: Algorithm Analysis — Asymptotic Notation / Big-O Definition

#### Problem Statement
> If $f(n) = 5n + 3$ and $g(n) = n$, we can say that $f(n) = O(g(n))$ if $f(n) \le c \cdot g(n)$ for all $n \ge n_0 \ge 1$. What are the values of $c$ and $n_0$?

#### Choice Options
1. $c = 5, n_0 = 0$
2. $c = 5, n_0 = 2$
3. $c = 6, n_0 = 1$
4. $c = 6, n_0 = 3$

#### Correct Answer
**Option 4**: *$c = 6, n_0 = 3$*

#### Technical Explanation
By formal definition of Big-O:
$$f(n) \le c \cdot g(n) \quad \text{for all } n \ge n_0$$

Substitute $f(n) = 5n + 3$ and $g(n) = n$:
$$5n + 3 \le c \cdot n$$

Let $c = 6$:
$$5n + 3 \le 6n \implies 3 \le 6n - 5n \implies n \ge 3$$

Thus, for $c = 6$, the inequality holds for all $n \ge 3$ ($n_0 = 3$).

---

## Set 9: Code Complexity & Logical Syllogism

- **Image Files**: `IMG_5776.jpeg` (Question 1), `IMG_5777.jpeg` (Question 2) & `IMG_5778.png` (Explanation)

### Question 1 (`IMG_5776.jpeg`)
- **Question**: Code Loop Iteration Time Complexity
- **Code Snippet**:
```cpp
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        for (int k = 1; k <= 50; k++) {
            // Statement(s) taking O(1) time
        }
    }
}
```
- **Complexity Derivation**:
  $$\text{Total Iterations} = 50 \times \sum_{i=1}^{n} i = 50 \times \frac{n(n+1)}{2} = 25n^2 + 25n = O(n^2)$$

---

### Question 2 (`IMG_5777.jpeg` & `IMG_5778.png`)
- **Question Title**: Deductive Syllogism Logic
- **Topic / Category**: Discrete Mathematics — Mathematical Logic & Set Inclusion

#### Problem Statement
> Given Premises:
> - **Premise 1**: All managers can view confidential documents.
> - **Premise 2**: All team leaders are managers.
>
> Which conclusion logically follows?

#### Choice Options
1. All team leaders can view confidential documents.
2. All managers are team leaders.
3. No managers are team leaders.
4. No team leaders can view confidential documents.

#### Correct Answer
**Option 1**: *All team leaders can view confidential documents.*

#### Technical Explanation
Using set theory and predicate logic:
- Let $TL = \text{Set of Team Leaders}$
- Let $M = \text{Set of Managers}$
- Let $C = \text{Set of People who can view confidential documents}$

From Premise 2: $TL \subseteq M$ (Team leaders are a subset of managers).
From Premise 1: $M \subseteq C$ (Managers are a subset of people who can view confidential documents).

By transitivity of set inclusion:
$$TL \subseteq M \quad \text{and} \quad M \subseteq C \implies TL \subseteq C$$

Therefore, **"All team leaders can view confidential documents."**
