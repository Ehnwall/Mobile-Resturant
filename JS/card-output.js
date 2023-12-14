const paginte = (array, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return array.slice(startIndex, startIndex + pageSize);
};

const test = {
    id: 'ribs-brisket-and-burnt-ends',
    img: 'https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1',
    name: "Joe's KC BBQ",
    dsc: "Joe's KC Ribs, Brisket & Burnt Ends",
    price: 110.99,
    rate: 4,
    country: 'Kansas City, KS',
};

const createCard = (foodInfo) => {
    // create new div with class menu-card
    const menuCardDiv = document.createElement('div');
    menuCardDiv.classList.add('menu-card');

    const menuCardImg = document.createElement(`img`);
    menuCardImg.src = foodInfo.img;
    menuCardImg.alt = foodInfo.name;

    const menuCardName = document.createElement(`h4`);
    menuCardName.textContent = foodInfo.name;

    const menuCardInfo = document.createElement(`p`);
    const strongInfo = document.createElement(`strong`);
    strongInfo.textContent = `Info:`;
    menuCardInfo.append(strongInfo, foodInfo.dsc);
    // menuCardInfo.textContent = foodInfo.dsc;

    const menuCardPrice = document.createElement(`p`);
    const strongPrice = document.createElement(`strong`);
    strongPrice.textContent = `Pris:`;
    menuCardPrice.append(strongPrice, foodInfo.price, `kr`);

    const menuCardCountry = document.createElement(`p`);
    const strongCountry = document.createElement(`strong`);
    strongCountry.textContent = `Country:`;
    menuCardCountry.append(strongCountry, foodInfo.country);

    const menuCardRate = document.createElement(`p`);
    const strongRate = document.createElement(`strong`);
    strongRate.textContent = `Rate:`;
    menuCardRate.append(strongRate, foodInfo.rate);

    const btnAddToCart = document.createElement(`button`);
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

console.log(createCard(test));
