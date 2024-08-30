document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/products')
    .then((response) => response.json())
    .then((products) => {
      const productsContainer = document.getElementById('products-container');

      products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const productImg = document.createElement('img');
        productImg.className = 'product-img';
        productImg.src = product.imageUrl;
        productImg.alt = 'Product image';

        const productTitle = document.createElement('h3');
        productTitle.className = 'product-title';
        productTitle.textContent = product.title;

        const productPrice = document.createElement('p');
        productPrice.className = 'product-price';
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        productCard.appendChild(productImg);
        productCard.appendChild(productTitle);
        productCard.appendChild(productPrice);
        productsContainer.appendChild(productCard);
      });
    })
    .catch((error) => console.error('Error fetching products:', error));
});
