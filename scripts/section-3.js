/**
 * Section 3 Timeline
 * - Single unified list
 * - Manual left/right control via `side`
 * - Manual ordering via `order` (lower = higher on the page)
 */

const timelineItems = [
  { order: 20, side: "left", date: "June 2024 - Dec 2024", title: "WezeshaNet Technologies Ltd", subtitle: "Software Engineer Intern", icon: "./icons/experience/wezeshanet.png", link: "https://www.wezeshanet.com", tags: ["Utility Scripts", "Debugging", "Testing", "Agile Sprints", "Git"] },
  { order: 10, side: "right", date: "Jan 2026 - Present", title: "Master's of Science", subtitle: "Georgia Institute of Technology", icon: "./icons/schools/gatech.png", link: "https://www.gatech.edu", tags: ["Machine Learning", "Software Engineering", "Cloud"] },
  { order: 30, side: "right", date: "Sept 2022 - May 2025", title: "Bachelor's of Science", subtitle: "University of Maryland, Baltimore County", icon: "./icons/schools/umbc.png", link: "https://umbc.edu", tags: ["AI", "Data Structures", "Algorithms", "Software Engineering", "Databases", "Probability", "Statistics"] },
  { order: 40, side: "right", date: "Sept 2020 - May 2022", title: "Associate's of Science", subtitle: "Montgomery College", icon: "./icons/schools/mc.png", link: "https://www.montgomerycollege.edu", tags: ["Programming", "Software Design", "Algorithms"] },
];

function sortTimeline(items) {
  return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTags(tags) {
  return tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
}

function renderTimelineItem(item) {
  const sideClass = item.side === "right" ? "timeline-item--right" : "timeline-item--left";

  return `
    <div class="timeline-item ${sideClass}">
      <div class="dot" aria-hidden="true"></div>

      <div class="card">
        <div class="card-info">
          <p class="card-date">${escapeHtml(item.date)}</p>
          <p class="card-title">${escapeHtml(item.title)}</p>
          <p class="card-school">${escapeHtml(item.subtitle)}</p>
          <div class="card-tags">${renderTags(item.tags)}</div>
        </div>

        <div class="card-logo">
          <a href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">
            <img class="card-icon" src="${escapeHtml(item.icon)}" alt="" />
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderTimeline(items) {
  const container = document.querySelector(".js-timeline");
  if (!container) return;
  container.innerHTML = items.map(renderTimelineItem).join("");
}

// ✅ ONE render, sorted:
renderTimeline(sortTimeline(timelineItems));