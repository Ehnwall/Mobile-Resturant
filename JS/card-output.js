let currentPage = 1;
let currentCategory = 'our-foods';
const amountOfCards = 9;

const title = document.querySelector('.menu-header');

const paginate = (array, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return array.slice(startIndex, startIndex + pageSize);
};

const createCard = (foodInfo) => {
    // create new div with class menu-card
    /* <div class="menu-card">
        <img
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
            alt="Joe's KC BBQ" />
        <h4>Joe's KC BBQ</h4>
        <p>
            <strong>Info:</strong> Joe's KC Ribs, Brisket & Burnt
            Ends
        </p>
        <p><strong>Price:</strong> foodInfo.price $</p>
        <p><strong>Country:</strong> foodInfo</p>
        <p><strong>Rate:</strong> foodInfo</p>
        <button class="btn-add-to-cart">foodInfo</button>
    </div> */
};

const updatePage = () => {
    const pageData = paginate(
        db[`${currentCategory}`],
        currentPage,
        amountOfCards
    );
    const cardsContainer = document.querySelector('.menu-cards-container');
    // cardsContainer.innerHTML = '';
    title.textContent = currentCategory;

    for (let food of pageData) {
        // const card = createCard(food);
        // cardsContainer.appendChild(card);
    }
};

updatePage();

console.log(db);

const nextPageButton = document.querySelector('.next-page');
nextPageButton.addEventListener('click', () => {
    currentPage++;
    console.log(currentPage);
    updatePage();
});

const prevPageButton = document.querySelector('.prev-page');
prevPageButton.addEventListener('click', () => {
    currentPage--;
    console.log(currentPage);
    updatePage();
});
