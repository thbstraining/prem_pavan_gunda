const CART_KEY = 'fashion_fusion_cart';

export const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product) => {
  let cart = getCart();

  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex !== -1) {
    alert(`${product.title} is already in your cart!`);
    return false; 
  }

  cart.push(product);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return true; 
};

export const removeFromCart = (productId) => {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};
