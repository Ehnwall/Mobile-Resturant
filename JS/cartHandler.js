const listCart = document.querySelector('.listCart');

let cart = [];
// cart.push(
//     { img: cardData.img, name: cardData.name, price: cardData.price, amount: 1 },
//     { img: cardData.img, name: cardData.name, price: cardData.price, amount: 1 },
//     { img: cardData.img, name: cardData.name, price: cardData.price, amount: 3 },
//     42
// );
const createItem = () => {
    return;
};
{
    /* <div class="item">
        <img
            src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1"
            alt="" />
        <p class="name">Peter Luger Steak House</p>
        <p class="totalPrice">$200</p>
        <div class="amount">
            <span id="minus"><</span>
            <span id="counter">0</span>
            <span id="plus">></span>
        </div>
    </div> */
}

const cartHandler = (cardData) => {
    return {
        img: cardData.img,
        name: cardData.name,
        price: cardData.price,
        amount: 1,
    };
};
export const addToCartListener = (pageData) => {
    const addToCart = document.querySelectorAll('.btn-add-to-cart');
    for (let i = 0; i < addToCart.length; i++) {
        addToCart[i].addEventListener('click', () => {
            const cartItem = cartHandler(pageData[i]);
            updateCart(cartItem);
        });
    }
};
const updateCart = (cartItem) => {
    if (cart.some((e) => e.name === cartItem.name)) {
    } else {
        cart.push(cartItem);
    }
    for (let item of cart) {
        console.log(item);
    }
    // listCart.appendChild(createItem(cartItem));
};
// let array = [{ name: 1 }, { name: 2 }, { name: 3 }];
// const searchedName = 4;
// if (array.some((e) => e.name === searchedName)) {
//     console.log('HITTAD');
// }
// for (let a of array) {
//     console.log(a.name);
// }
