// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handling form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // You can add form submission logic here, like sending an email or saving data.
    // For this example, let's just log the form data.
    const formData = new FormData(contactForm);
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
});

const projectGrid = document.getElementById('project-grid');

function loadProjects(filter) {
    // Simulate loading projects from a database or API
    const projects = [
        { title: 'Project 1', category: 'web', image: 'project1.jpg', description: 'Description of Project 1' },
        { title: 'Project 2', category: 'mobile', image: 'project2.jpg', description: 'Description of Project 2' },
        // Add more project data here
    ];

    projectGrid.innerHTML = '';

    projects.filter(project => filter === 'all' || project.category === filter).forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectGrid.appendChild(projectCard);
    });
}

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelector('.filter-button.active').classList.remove('active');
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        loadProjects(filter);
    });
});

// Initial project loading
loadProjects('all');