document.addEventListener('DOMContentLoaded', () => {
    function preloadImage(url) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        document.head.appendChild(link);
    }

    // Projects Array
    const projects = [
        {
            projectName: "Tribal Woven Baskets",
            yearOfCreation: "2024",
            projectDescription: "Local online store based in USA where home decoration products are sold.",
            imageUrl: "images/tribal.webp",
            link: "https://www.tribalwovenbaskets.com/",
        }, 
        {
            projectName: "Your Designer Friends",
            yearOfCreation: "2021",
            projectDescription: "Company dedicated to providing brand design, tutoring and software development services.",
            imageUrl: "images/designer-friends.webp",
            link: "https://yourdesignerfriends.com/",
        },  
    ];

    projects.forEach(project => {
        preloadImage(project.imageUrl);
    });
    // Function to create project cards
    function createProjectCard(project) {
        let card = document.createElement("section");
        card.classList.add("project-card");

        let name = document.createElement("h3");
        let link = document.createElement("a");
        link.setAttribute("href", project.link);
        link.setAttribute("target", "_blank");
        link.textContent = project.projectName;
        name.appendChild(link);

        let year = document.createElement("p");
        let description = document.createElement("p");
        let img = document.createElement("img");

        year.innerHTML = `<strong>Year of Creation:</strong> ${project.yearOfCreation}`;
        description.innerHTML = `<strong>Description:</strong> ${project.projectDescription}`;
        img.setAttribute("src", project.imageUrl);
        img.setAttribute("alt", `${project.projectName} Image`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "280");
        img.setAttribute("height", "262");

        card.appendChild(name);
        card.appendChild(year);
        card.appendChild(description);
        card.appendChild(img);

        return card;
    }

    // Function to display project cards
    function displayProjects(projects) {
        const projectContainer = document.querySelector(".project-container");
        projectContainer.innerHTML = '';
        projects.forEach(project => {
            projectContainer.appendChild(createProjectCard(project));
        });
    }

    // Display the projects
    displayProjects(projects);
});