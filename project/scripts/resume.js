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
            ]
        },
        {
            title: 'Work Experience',
            subtitle: 'Co-Founder - Your Designer Friends Olympia, WA - Oct. 2019 - Present',
            content: [
                'Led website and mobile app development, achieving high customer satisfaction and repeat business',
                'Collaborated closely with a team of three UX/UI designers and a back-end developer to improve functionality and visual appeal of several websites for local businesses',
                'Increased website traffic by 70% in 3 months through effective SEO strategies, boosting visibility',
                'Manage collaborative teamwork to optimize workflows and increase efficiency by over 50%',
                'Provided programming guidance to three new team members, creating a positive and productive work environment'
            ]
        },
        {
            title: 'Education',
            subtitle: 'Software Development BS - Brigham Young University - Idaho Rexburg, ID - Anticipated Jun. 2027',
            content: [
                'Object-oriented programming C# and Python',
                'JavaScript',
                'Web design and development principles',
                'HTML and CSS',
                'Database Management Systems',
            ]
        }
    ];

    function addBullets(items) {
        return items.map(item => `&bull; ${item}`);
    }

    function createCard(card) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        if (card.title.includes('Skills')) {
            card.content = addBullets(card.content);
            cardElement.classList.add('skills-card');
        }
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = card.title;
        cardElement.appendChild(cardTitle);

        if (card.subtitle) {
            const cardSubtitle = document.createElement('h4');
            cardSubtitle.textContent = card.subtitle;
            cardElement.appendChild(cardSubtitle);
        }

        const cardContent = document.createElement('ul');
        card.content.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = item;
            cardContent.appendChild(listItem);
        });
        cardElement.appendChild(cardContent);

        return cardElement;
    }

    cards.forEach(card => {
        resumeContainer.appendChild(createCard(card));
    });
});


