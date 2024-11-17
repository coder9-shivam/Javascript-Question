let productsHTML = '';  // This is Accumulator pattern

// Loop the products and This is the HTML Element code show on the web page writen in Javascript file
products.forEach((products) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${products.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${products.name};
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${products.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${products.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(products.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select class="js-quantity-selector-${products.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-to-txt-${products.id}">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${products.id}">
      Add to Cart
      </button>
      </div>
  `;
});

// Show the HTML Element on the web page
document.querySelector('.js-product-grid')
  .innerHTML = productsHTML;

// Interactive the Add To Cart Button
const addedMessageTimeouts = {};
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const { productId } = button.dataset;

      const addedMessage = document.querySelector(`.js-added-to-txt-${productId}`);

      addedMessage.classList.add('added-to-cart-visible');
      setTimeout(() => {
        const previousTimeoutId = addedMessageTimeouts[productId];
        if (previousTimeoutId) {
          clearTimeout(previousTimeoutId);
        }
        const timeoutId = setTimeout(() => {
          addedMessage.classList.remove('added-to-cart-visible')
        })
      }, 2000);


      // If the item is same just increase the quantity and push the code in cart.
      let matchingItem;
      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      // Select the quantity selector with the help of DOM
      const querySelector = document.querySelector(`.js-quantity-selector-${productId}`);

      const quantity = Number(querySelector.value);

      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          productId,
          quantity
        });
      }

      // Calculate the quantity
      let cartQuantity = 0;
      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      // Put the quantity on the page.

      document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
    });
  });