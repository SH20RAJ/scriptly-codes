// Interactive Task Simulation Logic
const tasks = {
  market: {
    command: 'aethel execute --agent="MarketIntel-v3" --autonomy="maximum"',
    logs: [
      "[00:00:01] Initializing neural execution context. Model: Claude 3.5 Sonnet + Aethel Reasoning Engine.",
      "[00:00:02] Tool Invocation: WebScraper(target=\"competitor-matrix\", depth=2)",
      "[00:00:03] Vector DB RAG Query resolved in 22ms. 1,480 relevant token chunks loaded.",
      "[00:00:04] Synthesis Complete: Opportunity detected in enterprise agent orchestration tier. Generating tactical memorandum."
    ],
    tokens: "1,842",
    duration: "342ms",
    tools: "4"
  },
  audit: {
    command: 'aethel audit --target="contracts/EscrowVault.rs" --checks="reentrancy,overflow,ast"',
    logs: [
      "[00:00:01] Loading Rust AST parser and symbolic execution VM.",
      "[00:00:02] Static Analysis: 14 functions inspected. Checking unchecked math in line 84.",
      "[00:00:03] Formal Verification: Generated 1,024 Z3 solver theorem proofs.",
      "[00:00:04] Zero vulnerabilities detected. Gas optimization report generated (+14.2% efficiency)."
    ],
    tokens: "2,410",
    duration: "418ms",
    tools: "3"
  },
  leadgen: {
    command: 'aethel outbound --target="fintech-ctos-us" --enrichment="apollo,linkedin" --batch=500',
    logs: [
      "[00:00:01] Ingesting intent data: Filtering CTOs actively expanding LLM infrastructure.",
      "[00:00:02] Autonomous Verification: Validating domain MX records and public cryptographic signatures.",
      "[00:00:03] Generating bespoke hyper-personalized technical value propositions.",
      "[00:00:04] 500 emails dispatched via sovereign SMTP relays. Projected response rate: 24.8%."
    ],
    tokens: "3,120",
    duration: "612ms",
    tools: "6"
  }
};

let currentTask = "market";

function setAgentTask(taskId) {
  currentTask = taskId;
  document.querySelectorAll(".task-tab").forEach(tab => tab.classList.remove("active"));
  const activeTab = document.getElementById(`btn-task-${taskId}`);
  if (activeTab) activeTab.classList.add("active");
  renderTerminal(tasks[taskId]);
}

function renderTerminal(task) {
  const container = document.getElementById("terminal-content");
  if (!container) return;

  container.innerHTML = `
    <div class="flex items-center gap-2 text-violet-400">
      <span>➜</span>
      <span class="text-slate-200">${task.command}</span>
    </div>
    ${task.logs.map(log => `<p class="${log.includes('Complete') || log.includes('Zero') ? 'text-emerald-400 font-semibold' : 'text-slate-400'}">${log}</p>`).join("")}
  `;

  const tokenCounter = document.getElementById("token-counter");
  if (tokenCounter) tokenCounter.innerText = task.tokens;
}

function triggerSimulation() {
  const container = document.getElementById("terminal-content");
  if (!container) return;
  container.innerHTML = `<p class="text-violet-400 animate-pulse font-mono">[00:00:00] Re-initializing agent worker sandbox...</p>`;
  setTimeout(() => {
    renderTerminal(tasks[currentTask]);
  }, 450);
}

// Billing Toggle Logic
function setBilling(cycle) {
  const monthlyBtn = document.getElementById("bill-monthly");
  const yearlyBtn = document.getElementById("bill-yearly");
  const prices = document.querySelectorAll(".price-val");

  if (cycle === "monthly") {
    monthlyBtn.className = "rounded-full px-4 py-1.5 text-xs font-bold transition bg-violet-600 text-white";
    yearlyBtn.className = "rounded-full px-4 py-1.5 text-xs font-bold transition text-slate-400 hover:text-white";
    prices.forEach(el => el.innerText = el.getAttribute("data-monthly"));
  } else {
    yearlyBtn.className = "rounded-full px-4 py-1.5 text-xs font-bold transition bg-violet-600 text-white";
    monthlyBtn.className = "rounded-full px-4 py-1.5 text-xs font-bold transition text-slate-400 hover:text-white";
    prices.forEach(el => el.innerText = el.getAttribute("data-yearly"));
  }
}
