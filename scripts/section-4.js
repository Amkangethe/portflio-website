// --------------------------------------------------------------------------------------
// Projects Section
projects = [{
        thumbnail : 'icons/projects/breast-cancer.png',
        title: 'Breast Cancer Classifier', 
        description: 'Built a deep learning image-classification model to identify' +
        ' breast tissue images as cancerous or non-cancerous. Used TensorFlow/Keras' +
        ' with a pretrained ResNet50 backbone, prepared training/validation/test datasets,' +
        ' and evaluated model performance for medical image classification.',
        technologies : ['Python', 'TensorFlow', 'Keras', 'ResNet50', 
            'NumPy', 'Matplotlib', 'Pandas', 'Scikit-learn','Jupyter Notebook'],
        link : 'https://github.com/Nalan12/AI4ALL_Project'
    }
];
let projectsHTML = '';

projects.forEach((project) => {
    
    projectsHTML += 
    `
    <div class="project-card">
        <div class="project-card-thumnail">
            <img class="project-card-thumnail-img" src="${project.thumbnail}" alt="" />
        </div>
        <div class="project-card-info">
            <p class="project-title">${project.title}</p>
            <p class="project-description">${project.description}</p>
            <p class="project-technologies-text">Technologies:</p>
            <div class="project-technologies">
            `;
            project.technologies.forEach((technology) => {
                projectsHTML += `<div class="project-technologies-chip">${technology}</div>`;
            });
    projectsHTML += `
            </div>
            <a class="project-code-button" href="${project.link}" target="_blank"  rel="noopener noreferrer">
                <img class="project-code-img" src="icons/skills/github-code.png" alt="" />
                <span class="project-code-text">Code</span>
            </a>
        </div>
    </div>	
    `;
    

});

document.querySelector(".js-projects-container").innerHTML = projectsHTML;

/*  
skillsSection = [{ "Languages" : ['Python', 'Java', 'C++', 'JavaScript', 'SQL', 'C#']},
                { "Web Development" : ['HTML', 'CSS', 'React', 'Flask']},
                { "AI & ML" : ['Ollama', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib']},
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

document.querySelector(".js-technical-grid-container").innerHTML = skillsSectionHTML;*/