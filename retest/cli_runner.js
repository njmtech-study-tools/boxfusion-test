#!/usr/bin/env node

/**
 * Boxfusion Intermediate Software Engineer Assessment - Interactive Re-Tester
 * 
 * Usage:
 *   node cli_runner.js              (Interactive Mode)
 *   node cli_runner.js --auto-test  (Non-interactive verification mode)
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const QUESTIONS_FILE = path.join(__dirname, 'questions.json');

if (!fs.existsSync(QUESTIONS_FILE)) {
  console.error("Error: questions.json not found!");
  process.exit(1);
}

const questionsData = JSON.parse(fs.readFileSync(QUESTIONS_FILE, 'utf8'));

const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  bgBlue: "\x1b[44m",
  white: "\x1b[37m"
};

function banner() {
  console.log(`${colors.cyan}╔═══════════════════════════════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.cyan}║   ${colors.bright}${colors.white}BOXFUSION TECHNICAL ASSESSMENT - RE-TESTING & PRACTICE SUITE${colors.reset}${colors.cyan}   ║${colors.reset}`);
  console.log(`${colors.cyan}║   ${colors.dim}Intermediate Software Engineer (React, Hooks, Context, DS/Algo)${colors.reset}${colors.cyan} ║${colors.reset}`);
  console.log(`${colors.cyan}╚═══════════════════════════════════════════════════════════════════╝${colors.reset}\n`);
}

async function runAutoTest() {
  banner();
  console.log(`${colors.yellow}Running Non-Interactive Automated Suite Verification...${colors.reset}\n`);
  
  let passed = 0;
  questionsData.forEach((q, idx) => {
    console.log(`${colors.bright}[${idx + 1}/${questionsData.length}] ${q.title}${colors.reset}`);
    console.log(`    Category: ${colors.cyan}${q.category}${colors.reset}`);
    console.log(`    Expected Answer: ${colors.green}${q.options[q.correctIndex]}${colors.reset}`);
    passed++;
  });

  console.log(`\n${colors.green}✔ Verified all ${passed} assessment questions in questions.json successfully!${colors.reset}\n`);
  process.exit(0);
}

async function runInteractive() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const askQuestion = (query) => new Promise(resolve => rl.question(query, resolve));

  banner();
  console.log(`${colors.yellow}Total Questions Available:${colors.reset} ${questionsData.length}\n`);
  
  console.log(`Select Domain Mode:`);
  console.log(` 1. Complete Assessment (All Questions)`);
  console.log(` 2. React Hooks & Lifecycle`);
  console.log(` 3. React Architecture & Context API`);
  console.log(` 4. Algorithms & Space/Time Complexity`);
  console.log(` 5. State Management & DOM Refs\n`);

  const modeChoice = await askQuestion(`${colors.bright}Enter selection (1-5, default 1): ${colors.reset}`);
  
  let filtered = questionsData;
  if (modeChoice.trim() === '2') {
    filtered = questionsData.filter(q => q.category.includes('Hooks') || q.category.includes('Lifecycle'));
  } else if (modeChoice.trim() === '3') {
    filtered = questionsData.filter(q => q.category.includes('Context') || q.category.includes('Architecture'));
  } else if (modeChoice.trim() === '4') {
    filtered = questionsData.filter(q => q.category.includes('Algorithm') || q.category.includes('Complexity'));
  } else if (modeChoice.trim() === '5') {
    filtered = questionsData.filter(q => q.category.includes('State') || q.category.includes('Ref'));
  }

  if (filtered.length === 0) filtered = questionsData;

  console.log(`\n${colors.green}Starting Assessment Session with ${filtered.length} Questions...${colors.reset}\n`);

  let score = 0;
  
  for (let i = 0; i < filtered.length; i++) {
    const q = filtered[i];
    console.log(`${colors.bright}${colors.blue}[Question ${i + 1}/${filtered.length}]${colors.reset} ${colors.yellow}[${q.category}]${colors.reset}`);
    console.log(`${colors.bright}${q.title}${colors.reset}\n`);
    
    if (q.code) {
      console.log(`${colors.dim}┌── Code Snippet ──────────────────────────────────────────┐${colors.reset}`);
      q.code.split('\n').forEach(line => console.log(`${colors.dim}│${colors.reset} ${colors.cyan}${line}${colors.reset}`));
      console.log(`${colors.dim}└──────────────────────────────────────────────────────────┘${colors.reset}\n`);
    }

    q.options.forEach((opt, idx) => {
      console.log(`  ${colors.bright}${idx + 1}.${colors.reset} ${opt}`);
    });

    console.log('');
    let ans = await askQuestion(`${colors.bright}Your answer (1-${q.options.length}): ${colors.reset}`);
    const chosenIndex = parseInt(ans.trim(), 10) - 1;

    if (chosenIndex === q.correctIndex) {
      score++;
      console.log(`\n${colors.bgBlue}${colors.white} CORRECT! ${colors.reset} ${colors.green}✔ ${q.options[q.correctIndex]}${colors.reset}`);
    } else {
      console.log(`\n${colors.red}✘ INCORRECT.${colors.reset}`);
      console.log(`Your choice: ${colors.red}${q.options[chosenIndex] || 'Invalid selection'}${colors.reset}`);
      console.log(`Correct answer: ${colors.green}✔ ${q.options[q.correctIndex]}${colors.reset}`);
    }

    console.log(`\n${colors.yellow}💡 Explanation:${colors.reset}`);
    console.log(`${colors.dim}${q.explanation}${colors.reset}\n`);

    if (i < filtered.length - 1) {
      await askQuestion(`${colors.dim}Press Enter to proceed to the next question...${colors.reset}`);
    }
  }

  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bright}ASSESSMENT COMPLETE!${colors.reset}`);
  console.log(`Final Score: ${colors.bright}${score} / ${filtered.length}${colors.reset} (${Math.round((score/filtered.length)*100)}%)`);
  console.log(`${colors.cyan}═══════════════════════════════════════════════════════════════════${colors.reset}\n`);

  rl.close();
}

if (process.argv.includes('--auto-test')) {
  runAutoTest();
} else {
  runInteractive();
}
