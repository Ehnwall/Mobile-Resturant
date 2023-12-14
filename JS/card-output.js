let currentPage = 1;
let currentCategory = 'our-foods';
const amountOfCards = 9;

const title = document.querySelector('.menu-header');

const paginate = (array, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return array.slice(startIndex, startIndex + pageSize);
};

// Adds div elements with information for all dishes
const createCard = (foodInfo) => {
    const menuCardDiv = document.createElement('div');
    menuCardDiv.classList.add('menu-card');

    const menuCardImg = document.createElement(`img`);
    menuCardImg.src = foodInfo.img;
    menuCardImg.alt = foodInfo.name;

    const menuCardName = document.createElement(`h4`);
    menuCardName.textContent = foodInfo.name;

    const menuCardInfo = document.createElement(`p`);
    const strongInfo = document.createElement(`strong`);
    strongInfo.textContent = `Info: `;
    menuCardInfo.append(strongInfo, foodInfo.dsc);

    const menuCardPrice = document.createElement(`p`);
    const strongPrice = document.createElement(`strong`);
    strongPrice.textContent = `Pris: `;
    menuCardPrice.append(strongPrice, foodInfo.price, `kr`);

    const menuCardCountry = document.createElement(`p`);
    const strongCountry = document.createElement(`strong`);
    strongCountry.textContent = `Country: `;
    menuCardCountry.append(strongCountry, foodInfo.country);

    const menuCardRate = document.createElement(`p`);
    const strongRate = document.createElement(`strong`);
    strongRate.textContent = `Rate: `;
    menuCardRate.append(strongRate, foodInfo.rate);

    const btnAddToCart = document.createElement(`button`);
    btnAddToCart.textContent = 'Beställ';
    btnAddToCart.classList.add(`btn-add-to-cart`);

    menuCardDiv.append(
        menuCardImg,
        menuCardName,
        menuCardInfo,
        menuCardPrice,
        menuCardCountry,
        menuCardRate,
        btnAddToCart
    );
    return menuCardDiv;
};

const updatePage = () => {
    const pageData = paginate(
        db[`${currentCategory}`],
        currentPage,
        amountOfCards
    );
    const cardsContainer = document.querySelector('.menu-cards-container');
    cardsContainer.innerHTML = '';
    title.textContent = currentCategory;

    for (let food of pageData) {
        const card = createCard(food);
        cardsContainer.appendChild(card);
    }
};

updatePage();

console.log(db);

const nextPageButton = document.querySelector('.next-page');
nextPageButton.addEventListener('click', () => {
    currentPage++;
    document.getElementById('title').scrollIntoView(); //scroll to the top of the page
    updatePage();
});

const prevPageButton = document.querySelector('.prev-page');
prevPageButton.addEventListener('click', () => {
    currentPage--;
    document.getElementById('title').scrollIntoView(); //scroll to the top of the page
    updatePage();
});
console.log(createCard(test));
