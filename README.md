## [![GitHub contributors](https://img.shields.io/github/contributors/omoinjm/boxfusion_test)](https://github.com/omoinjm/boxfusion_test/graphs/contributors/) [![GitHub Stars](https://img.shields.io/github/stars/omoinjm/boxfusion_test.svg)](https://github.com/omoinjm/boxfusion_test/stargazers)

# 🚀 Boxfusion Technical Assessment & Practice Portfolio

---

## 📌 About This Repository

This repository documents the complete analysis, technical breakdowns, code reproductions, and interactive re-testing framework for the **Boxfusion Intermediate Software Engineer Assessment** (TestGorilla).

It serves as:

- 📊 A **portfolio** showcasing in-depth mastery of React, Hooks, Context API, DOM ref handling, and Data Structures & Algorithms.
- ✅ Evidence of **hands-on software engineering expertise** and rigorous code analysis.
- 📚 A structured **technical learning record** aligned with enterprise frontend and full-stack development expectations.
- 🔄 An interactive **re-testing suite** allowing developers to practice and re-test all assessment questions in real-time.

---

## 💡 Key Assessment Domains & Core Skills

### 🪝 React Hooks & Lifecycle

| Concept | Key Mechanics | Assessment Focus |
| :--- | :--- | :--- |
| **`useEffect` Dependency Array** | Shallow reference comparison (`Object.is`) | Avoiding infinite re-render loops & isolating side-effects |
| **Component Mount Effects (`[]`)** | Empty dependency array execution timing | Running setup logic once post-initial commit phase |
| **Conditional JSX Unmounting** | Short-circuit evaluation (`{cond && <Child />}`) | Triggering cleanup functions and unmounting VDOM subtrees |
| **Render Props Pattern** | Dynamic callback execution (`render={() => [...]}`) | Custom string formatting (`Array.prototype.join()`) |

### 🏗️ React Architecture & State Management

| Concept | Key Mechanics | Assessment Focus |
| :--- | :--- | :--- |
| **React Context API** | `createContext` & `useContext` | Eliminating prop drilling across deeply nested trees |
| **Uncontrolled Inputs & Refs** | `useRef` & `defaultChecked` / `defaultValue` | Reading native DOM properties without triggering state re-renders |
| **Local Variable Closure Traps** | Function scope vs React state (`useState`) | Understanding why plain variable mutations fail to re-render UI |
| **Higher-Order Components (HOC)** | Prop forwarding & JSX spread (`<C {...p} />`) | Wrapping components with dynamic style & event handlers |

### ⚡ Data Structures & Algorithms

| Algorithm / Data Structure | Time / Space Complexity | Practical Application |
| :--- | :--- | :--- |
| **Circular Array Rotation** | $O(n)$ Time / $O(n)$ Space | Modulo arithmetic `(i + k) % n` for wrap-around shifting |
| **Auxiliary Memory Analysis** | $O(n)$ Space | Identifying dynamic auxiliary array allocations |
| **MEX Min Removals (`updateMEX`)** | $O(n)$ Time / $O(1)$ Space | Frequency counting to alter Minimum Excluded integers |
| **Queue FIFO Operations** | $O(1)$ Dequeue | First-In, First-Out sequence evaluation |
| **BST Key Validity** | $O(h)$ Search | Enforcing total ordering on tree node key types |

---

## 📁 Repository Structure

```
boxfusion_test/
├── 🧪 Labs/
│   ├── 🪝 01_React_Hooks_and_Lifecycle/
│   ├── 🏗️ 02_React_Architecture_and_Context/
│   ├── ⚡ 03_Algorithms_and_Complexity/
│   ├── 🛠️ 04_State_Management_and_Refs/
│   └── 📐 04_Software_Engineering_Practices/
├── 🔄 retest/
│   ├── cli_runner.js          (Interactive CLI Quiz & Auto-Tester)
│   ├── questions.json         (16 Verbatim Assessment Questions & Solutions)
│   └── package.json
├── 📦 docs/
│   └── img/                   (98 Assessment Screenshots & Gemini Explanations)
├── ⚙️ _config.yml
└── 📖 README.md
```

---

## 🚀 Navigation & Quick Links

- 📜 [Project Summary](./SUMMARY.md) - Summary of implementation and execution record
- 🧪 [Labs Overview](./Labs/README.md) - Deep-dive technical task documentation by domain
- 🪝 [React Hooks & Lifecycle](./Labs/01_React_Hooks_and_Lifecycle/README.md) - `useEffect`, dependency arrays, and unmounting
- 🏗️ [React Architecture & Context](./Labs/02_React_Architecture_and_Context/README.md) - Context API, HOCs, and prop spreading
- ⚡ [Algorithms & Complexity](./Labs/03_Algorithms_and_Complexity/README.md) - Space complexity, array rotation, and MEX
- 🛠️ [State Management & Refs](./Labs/04_State_Management_and_Refs/README.md) - Uncontrolled inputs, refs, and closures
- 📐 [Engineering Practices](./Labs/04_Software_Engineering_Practices/README.md) - Logical deduction and critical thinking

---

## 🎯 How to Run the Interactive Re-Testing Suite

You can practice and test your knowledge interactively against all 16 assessment questions directly from your terminal!

```bash
# Navigate to the re-test directory
cd retest

# Launch the interactive CLI quiz runner
npm start

# Run automated verification suite (CI mode)
npm test
```

---

## 📋 Assessment Topics Matrix

```
┌─────────────────────────────────────────────────────────┐
│       🌟 Boxfusion Technical Assessment Matrix 🌟        │
├─────────────────────────────────────────────────────────┤
│  🪝 REACT HOOKS       🏗️ REACT ARCHITECTURE             │
│  • useEffect Deps     • Context API (useContext)        │
│  • Mount Execution    • Higher-Order Components (HOC)   │
│  • Unmounting JSX     • Prop Forwarding ({...props})    │
│                       • Render Props Pattern            │
│                                                         │
│  ⚡ ALGORITHMS        🛠️ DOM & STATE MANAGEMENT          │
│  • Array Rotation     • useRef Uncontrolled Inputs      │
│  • Space Complexity   • defaultChecked & defaultValue   │
│  • MEX Removals       • Local Variable Closures         │
│  • Queue (FIFO)       • State vs Ref Tradeoffs          │
└─────────────────────────────────────────────────────────┘
```

---

## 👤 Author

**Nhlanhla Malaza** 👨‍💻  
Full-Stack / React Engineer  
Aspiring Cloud & Software Engineering Specialist ☁️
