const wrap = document.querySelector(".skills");
const label = document.getElementById("skillsLabel");

if (wrap && label) {
    wrap.addEventListener("mouseover", (e) => {
    const icon = e.target.closest(".skills-icon");
    if (!icon) return;

    const name = icon.dataset.skill || icon.alt || "";
    if (!name) return;

    label.textContent = name;
    label.classList.add("show");

    // position label under the icon (relative to .skills container)
    const wrapRect = wrap.getBoundingClientRect();
    const iconRect = icon.getBoundingClientRect();
    const centerX = iconRect.left + iconRect.width / 2 - wrapRect.left;

    label.style.left = `${centerX}px`;
    });

    wrap.addEventListener("mouseleave", () => {
    label.classList.remove("show");
    label.textContent = "";
    });
}

// --------------------------------------------------------------------------------------
// Skills Section
skillsList = ['python', 'java', 'c-', 'c-sharp', 'html', 'css', 'js', 
    'git', 'database', 'linux', 'jira', 'python', 'java', 'c-', 'c-sharp', 'html', 'css', 'js', 
    'git', 'database', 'linux', 'jira'
];

let skillsHTML = '';

skillsList.forEach((skill) =>
{

    skillsHTML += `
    <img class="skills-icon" src="./icons/skills/${skill}.png" alt="${skill}" data-skill="${skill.toUpperCase()}">
    `;
});

document.querySelectorAll(".js-skills-group").forEach((el) => {
  el.innerHTML = skillsHTML;
});
// --------------------------------------------------------------------------------------
// Technical Section
skillsSection = [{ "Languages" : ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'C#']},
                { "Web Development" : ['HTML', 'CSS', 'React', 'Flask']},
                { "Web Development" : ['TensorFlow', 'Keras', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib']},
                { "Databases & Tools" : ['MySQL','SQLite', 'MongoDB', 'Git', 'Linux', 'Jira']}
];

let skillsSectionHTML = '';

skillsSection.forEach((group) => {
  const category = Object.keys(group)[0];
  const skills = group[category];

  const chipsHTML = skills
    .map((skill) => `<span class="chip">${skill}</span>`)
    .join("");

  skillsSectionHTML += `
    <div class="tech-card">
      <p class="tech-card-title">${category}</p>
      <div class="tech-card-chips">
        ${chipsHTML}
      </div>
    </div>
  `;
});

document.querySelector(".js-technical-grid-container").innerHTML = skillsSectionHTML;