document.addEventListener('DOMContentLoaded', () => {
    // Projects Array
    const projects = [
        {
            projectName: "Tribal Woven Baskets",
            yearOfCreation: "2024",
            projectDescription: "Local online store based in USA where home decoration products are sold.",
            imageUrl: "images/tribal-woven-baskets.webp",
            link: "https://yourdesignerfriends.com/",
        }, 
        {
            projectName: "Your Designer Friends",
            yearOfCreation: "2021",
            projectDescription: "Company dedicated to providing brand design, tutoring and software development services.",
            imageUrl: "images/your-designer-friends.webp",
            link: "https://www.tribalwovenbaskets.com/",
        },  
    ];
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

        year.innerHTML = `<span class="label">Year of Creation:</span> ${project.yearOfCreation}`;
        

});