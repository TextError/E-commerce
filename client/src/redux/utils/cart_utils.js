export const add_item_to_cart = (cart_item, cart_item_to_add) => {
  const existing = cart_item.find(
    item => item.id === cart_item_to_add.id
  );

  if (existing) {
    return cart_item.map(item =>
      item.id === cart_item_to_add.id
        ? { ...item, qty: item.qty + 1 }
        : item
    );
  }

  return [...cart_item, { ...cart_item_to_add, qty: 1 }];
};