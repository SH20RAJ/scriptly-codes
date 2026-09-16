// Project Filtering
function filterProjects(category) {
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`filter-${category}`);
  if (activeBtn) activeBtn.classList.add("active");

  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    if (category === "all" || card.getAttribute("data-cat") === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Spatial Scope Feasibility Estimator
function updateEstimator(sqft) {
  const numSqft = parseInt(sqft, 10);
  const formattedSqft = Number(numSqft).toLocaleString() + " sq.ft";
  document.getElementById("sqft-val").innerText = formattedSqft;

  let designMonths = Math.round(4 + (numSqft / 3000));
  let buildMonths = Math.round(10 + (numSqft / 1400));
  let tier = "Boutique Atelier";

  if (numSqft > 12000) {
    tier = "Estate Monolith";
  } else if (numSqft > 6000) {
    tier = "Master Atelier";
  }

  document.getElementById("est-design").innerText = `${designMonths} Months`;
  document.getElementById("est-build").innerText = `${buildMonths} Months`;
  document.getElementById("est-tier").innerText = tier;
}

// Inquiry Form Submission Mock
function handleInquiry(e) {
  e.preventDefault();
  const btn = document.getElementById("btn-submit-inquiry");
  if (!btn) return;

  btn.innerText = "Commission Inquiry Received — Atelier Will Respond Within 24h";
  btn.style.backgroundColor = "#10b981";
  btn.style.color = "#ffffff";
  btn.disabled = true;
}
