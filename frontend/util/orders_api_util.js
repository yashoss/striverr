export const addOrders = (items, success) => {
  $.ajax({
    method: 'POST',
    data: {orders: items},
    url: `/api/orders`,
    success
  });
};
