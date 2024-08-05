const cardsData = [
    // Array of objects representing your projects (30 items)
    { img: './resources/images/project-previews/fashion-blog.png', title: 'Fashion Blog', description: '', link: 'https://cxali.github.io/fashion-blog.html' },
    { img: './resources/images/project-previews/wine-festival.png', title: 'Wine Festival Schedule', description: '', link: 'https://cxali.github.io/wine-festival-schedule.html' },
    { img: './resources/images/project-previews/ny-city.png', title: 'New York City Blog', description: '', link: 'https://cxali.github.io/ny-city-blog.html' },
    { img: './resources/images/project-previews/healthy-recipes.png', title: 'Healthy Recipes', description: '', link: 'https://cxali.github.io/healthy-recipes.html' },
    { img: './resources/images/project-previews/olivia-portfolio.png', title: 'Olivia Woodruff Portfolio', description: '', link: 'https://cxali.github.io/olivia-woodruff-portfolio.html' },
    { img: './resources/images/project-previews/davies-burgers.png', title: 'The Box Model: Davie\'s Burgers', description: '', link: 'https://cxali.github.io/davies-burgers.html' },
    { img: './resources/images/project-previews/broadway.png', title: 'Broadway', description: '', link: 'https://cxali.github.io/broadway.html' },
    { img: './resources/images/project-previews/typography.png', title: 'Typography', description: '', link: 'https://cxali.github.io/typography.html' },
    { img: './resources/images/project-previews/summit.png', title: 'The Summit', description: '', link: 'https://cxali.github.io/summit.html' },
    { img: './resources/images/project-previews/freshdeals.png', title: 'FreshDeals: Blueberries', description: '', link: 'https://cxali.github.io/freshdeals-blueberries.html' },
    { img: './resources/images/project-previews/todo.png', title: 'Flexbox: To-Do App', description: '', link: 'https://cxali.github.io/todo_app.html' },
    { img: './resources/images/project-previews/pupspa.png', title: 'Grid: PupSpa', description: '', link: 'https://cxali.github.io/pupspa.html' },
    { img: './resources/images/project-previews/taskboard.png', title: 'Grid: Task Board', description: '', link: 'https://cxali.github.io/task_board.html' },
    { img: './resources/images/project-previews/tsunami_coffee.png', title: 'Responsive Design: Tsunami Coffee', description: '', link: 'https://cxali.github.io/tsunami_coffee.html' },
    { img: './resources/images/project-previews/excursion.png', title: 'Excursion', description: '', link: 'https://cxali.github.io/excursion/' },

    { img: './resources/images/project-previews/echo_chatbot.png', title: 'Echo Chatbot', description: '', link: 'https://onecompiler.com/python/42be86676' },
    { img: './resources/images/project-previews/physics.png', title: 'Getting Ready for Physics Class', description: '', link: 'https://onecompiler.com/python/422txkh5j' },
    { img: './resources/images/project-previews/8ball.png', title: 'Magic 8-Ball - project in control flow', description: '', link: 'https://onecompiler.com/python/4239kbsbv' },
    { img: './resources/images/project-previews/salshipping.png', title: 'Sal\'s Shipping - Control Flow ', description: '', link: 'https://onecompiler.com/python/423cebqws' },
    { img: './resources/images/project-previews/chatbot.png', title: 'Coffee Chatbot - Chatbot Evolution', description: '', link: 'https://onecompiler.com/python/423hs9cjx' },
    { img: './resources/images/project-previews/gradebook.png', title: 'Gradebook - Lists ', description: '', link: 'https://onecompiler.com/python/423qucbrj' },
    { img: './resources/images/project-previews/slice.png', title: 'Len\'s Slice - Python lists', description: '', link: 'https://onecompiler.com/python/423wk6grq' },
    { img: './resources/images/project-previews/chatbot-loops.png', title: 'Looping Coffee Chatbot - LOOPS', description: '', link: 'https://onecompiler.com/python/424a9muug' },
    { img: './resources/images/project-previews/dictionaries.png', title: 'Scrabble - DICTIONARIES', description: '', link: 'https://onecompiler.com/python/424hknq4q' },
    // Repeat for the remaining items
];

function createCard(card) {
    return `
        <div class="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
            <div class="card">
                <img src="${card.img}" class="card-img-top" alt="${card.title}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <!-- <p class="card-text">${card.description}</p> -->
                    <a href="${card.link}" target="_blank" class="btn btn-primary">Visit</a>
                </div>
            </div>
        </div>
    `;
}

function createCarouselItem(cards, isActive) {
    const activeClass = isActive ? 'active' : '';
    const cardHtml = cards.map(createCard).join('');
    
    return `
        <div class="carousel-item ${activeClass}">
            <div class="row">${cardHtml}</div>
        </div>
    `;
}

function initializeCards() {
    const initialCardsContainer = document.getElementById('initial-cards');
    const initialCards = cardsData.slice(0, 10).map(createCard).join('');
    initialCardsContainer.innerHTML = initialCards;
}

function initializeCarousel() {
    const carouselInner = document.getElementById('carousel-inner');
    const cardsPerPage = 10;
    let isActive = true;

    for (let i = 0; i < cardsData.length; i += cardsPerPage) {
        const cards = cardsData.slice(i, i + cardsPerPage);
        const carouselItem = createCarouselItem(cards, isActive);
        carouselInner.insertAdjacentHTML('beforeend', carouselItem);
        isActive = false;
    }
}

document.getElementById('load-more-btn').addEventListener('click', function() {
    document.getElementById('codecademyCarousel').classList.remove('d-none');
    this.classList.add('d-none');
    document.getElementById('initial-cards').remove();
    initializeCarousel();
});

document.addEventListener('DOMContentLoaded', initializeCards);
