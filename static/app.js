const cards = [...document.querySelectorAll(".job-card")];
const roleSearch = document.querySelector("#role-search");
const locationSearch = document.querySelector("#location-search");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const filters = [...document.querySelectorAll(".filter")];
let activeCategory = "all";

function filterJobs() {
  const role = roleSearch.value.trim().toLowerCase();
  const location = locationSearch.value.trim().toLowerCase();
  let visible = 0;

  for (const card of cards) {
    const matchesRole = !role || card.dataset.search.includes(role);
    const matchesLocation = !location || card.dataset.search.includes(location);
    const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
    const show = matchesRole && matchesLocation && matchesCategory;
    card.hidden = !show;
    if (show) visible += 1;
  }

  resultCount.textContent = `Showing ${visible} sample role${visible === 1 ? "" : "s"}`;
  emptyState.hidden = visible > 0;
}

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  filterJobs();
  document.querySelector("#jobs").scrollIntoView({ behavior: "smooth" });
});

roleSearch.addEventListener("input", filterJobs);
locationSearch.addEventListener("input", filterJobs);

for (const button of filters) {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.filter;
    for (const filter of filters) {
      const selected = filter === button;
      filter.classList.toggle("active", selected);
      filter.setAttribute("aria-pressed", String(selected));
    }
    filterJobs();
  });
}

for (const button of document.querySelectorAll(".save-button")) {
  button.addEventListener("click", () => {
    const saved = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!saved));
    button.textContent = saved ? "♡" : "♥";
  });
}
