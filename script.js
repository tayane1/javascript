document.addEventListener("DOMContentLoaded", function() {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    function updateTotalPrice() {
      let totalPrice = 0;
      cartItems.forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const pricePerItem = 10; // Remplacez ceci par le prix réel par article
        totalPrice += quantity * pricePerItem;
      });
      totalPriceElement.textContent = totalPrice;
    }

    function updateQuantity(item, action) {
      const quantityElement = item.querySelector('.quantity');
      let quantity = parseInt(quantityElement.textContent);

      if (action === 'increase') {
        quantity++;
      } else if (action === 'decrease' && quantity > 1) {
        quantity--;
      }

      quantityElement.textContent = quantity;
      updateTotalPrice();
    }

    function removeItem(item) {
      item.remove();
      updateTotalPrice();
    }

    function toggleFavorite(item) {
      const heartIcon = item.querySelector('.heart-icon');
      heartIcon.classList.toggle('active');
    }

    cartItems.forEach(item => {
      const quantityBtns = item.querySelectorAll('.quantity-btn');
      const removeBtn = item.querySelector('.remove-btn');
      const heartIcon = item.querySelector('.heart-icon');

      quantityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.getAttribute('data-action');
          updateQuantity(item, action);
        });
      });

      removeBtn.addEventListener('click', () => {
        removeItem(item);
      });

      heartIcon.addEventListener('click', () => {
        toggleFavorite(item);
      });
    });

    updateTotalPrice();
  });