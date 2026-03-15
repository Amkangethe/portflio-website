// --------------------------------------------------------------------------------------
// Education Section
educationCards = [{ school : ['Jan 2026 - Present', 
    'Master\'s of Science', 
    './icons/schools/gatech.png',
    'Georgia Institute of Technology',
    ['Machine Learning', 'Software Engineering', 'Cloud'],
    'https://www.gatech.edu'

    ]},{ school : ['Sept 2022 - May 2025', 
    'Bachelor\'s of Science', 
    './icons/schools/umbc.png',
    'University of Maryland, Baltimore County',
    ['AI', 'Data Structures', 'Algorithms', 'Software Engineering',' Databases', 
       ' Probability',  'Statistics'],
    'https://umbc.edu'

    ]},{ school : ['Sept 2020 - May 2022', 
    'Associate\'s of Science', 
    './icons/schools/mc.png',
    'Montgomery College',
    ['Programming', 'Software Design', 'Algorithms'],
    'https://www.montgomerycollege.edu'

    ]}
];

let cardHTML = '';

educationCards.forEach((card) => {
    const school = Object.keys(card)[0];
    const details = card[school];

    cardHTML +=`
    
    <div class="card">
        <div class="dot">

        </div>
        
        <div class="card-info">
            <p class="card-date">${details[0]}</p>
            <p class="card-title">${details[1]}</p>
            <p class="card-school">
                ${details[3]}
                
                
            </p>
            <div class="card-tags">`;
            
            details[4].forEach((tag) =>{
                cardHTML +=`<span class="tag">${tag}</span>`

            });
            cardHTML += `
            </div>
        </div>
        <div class="card-logo">
            <a href="${ details[5]}">
                <img class="card-icon" src="${details[2]}" />
            </a>
        </div>
    </div>`

});

document.querySelector('.js-education').innerHTML = cardHTML;
// --------------------------------------------------------------------------------------