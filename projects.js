// projects.js

const projects = [
    {
        img: 'Pictures/logoJustDance.jpg',
        alt: 'JustDance logo',
        name: 'Ubisoft',
        role: 'Project Assistant',
        detailsLink: 'justdance.html',
        tags:["Prod","XPpro"]
    },
    {
        img: 'Pictures/peterpan.jfif',
        alt: 'Neverland img',
        name: 'Innerspace VR',
        role: 'Prod/GD',
        detailsLink: 'neverland.html',
        tags:["Prod","GD","XPpro"]
    },
    {
        img : "Pictures/gamucatex_main.png",
        alt:"Tectonicus official picture",
        name:'Tectonicus from Gamucatex',
        role :'Internship as Game Designer',
        detailsLink: "tectonicus.html",
        tags:["GD","XPpro"]
    },
    {
        img:"Pictures/savethecolor.png",
        alt:"Save the color official picture",
        name :'Save the color | UniJam 2023 | 1st place',
        role :'Prod/GD',
        detailsLink:"save_the_color.html",
        tags:["Prod","GD","GameJam"]
    },
    {
        img:"Pictures/root_expansion.PNG",
        alt:"Root expansion main menu",
        name:"Root Expansion | Global Game Jam 2022 : 'Root'",
        role:'UI and Game designer',
        detailsLink:"root_expansion.html",
        tags:["GD","GameJam"]
    },
    {
        img:"Pictures/blender.png",
        alt:"Blender's logo",
        name:'Blender Assets',
        role:'',
        detailsLink:"blender.html",
        tags:["Art"]
    },
    {
        img:'',
        alt:'',
        name:'Platformer 2D',
        role:'Dev & LD',
        detailsLink:"platformer_2d.html",
        tags:["Dev","LD"]
    },
    {
        img:"Pictures/gloutrobate.PNG", 
        alt:"Picture in game",
        name:'Gloutrobate',
        role:'Dev & LD',
        detailsLink:"gloutrobate.html",
        tags:["Dev","LD"]
    },
    {
        img:"Pictures/schmup.PNG", 
        alt:"Picture in game",
        name:"Shoot'em Up",
        role: "Dev",
        detailsLink:"shoot_them_up.html",
        tags:["Dev"]
    }
    // Add more projects as needed
];

const projetsContainer = document.getElementById('projets');

projects.forEach(project => {
    const projetElement = document.createElement('div');
    projetElement.classList.add('projet');
    const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    projetElement.innerHTML = `
        <div class="projet-inner">
            <div class="flip-card-front">
                <img src="${project.img}" alt="${project.alt}">
                <div class="tags">
                    ${tagsHTML}
                </div>
            </div>
            <div class="flip-card-back">
                <h2>${project.name}</h2>
                <p>${project.role}</p>
                <button class="projet-details">
                    <a href="${project.detailsLink}">Details</a>
                </button>
            </div>
        </div>
    `;

    projetsContainer.appendChild(projetElement);
});
