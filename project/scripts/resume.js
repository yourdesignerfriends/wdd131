document.addEventListener('DOMContentLoaded', () => {
    const resumeContainer = document.getElementById('resume-container');

    if (!resumeContainer) {
        console.error('Resume container not found!');
        return;
    }

    const cards = [
        {
            title: 'Skills',
            content: [
                'CSS frameworks',
                'JavaScript',
                'HTML',
                'Responsive Design',
                'Problem-Solving',
                'SEO Best Practices',
                'Attention To Detail',
                'Creativity',
                'Teamwork',
                'Empathy',
                'Honesty',
                'Spanish fluent'
            ],
            isSkills: true
        },
        {
            title: 'Work Experience',
            content: [
                'Co-Founder Oct. 2019 - Present',
                'Your Designer Friends Olympia, WA',
                'Led website and mobile app development, achieving high customer satisfaction and repeat business',
                'Collaborated closely with a team of three UX/UI designers and a back-end developer to improve functionality and visual appeal of several websites for local businesses',
                'Increased website traffic by 70% in 3 months through effective SEO strategies, boosting visibility',
                'Manage collaborative teamwork to optimize workflows and increase efficiency by over 50%',
                'Provided programming guidance to three new team members, creating a positive and productive work environment'
            ]
        },
        {
            title: 'Education',
            content: [
                'Software Development BS Anticipated Jun. 2027',
                'Brigham Young University - Idaho Rexburg, ID',
                'Object-oriented programming C# and Python',
                'JavaScript',
                'Web design and development principles',
                'HTML and CSS',
                'Database Management Systems',
                'Pathway Connect Certificate Sep. 2023',
                'BYU - Pathway Worldwide Salt Lake City, UT',
                'Communication',
                'Problem solving',
                'Time and financial management',
                'Develop personal abilities to add value to workplaces'
            ]
        }
    ];

    function createCard(card) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        if (card.isSkills) {
            cardElement.classList.add('skills-card');
            }
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = card.title;
        cardElement.appendChild(cardTitle);

        const cardContent = document.createElement('ul');
        card.content.forEach(item => {
            const listItem = document.createElement('li');
            if (card.isSkills) {
                listItem.innerHTML = `&bull; ${item}`;
            } else {
                listItem.textContent = item;
            }
            cardContent.appendChild(listItem);
        });
        cardElement.appendChild(cardContent);

        return cardElement;
    }

    cards.forEach(card => {
        resumeContainer.appendChild(createCard(card));
    });
});

