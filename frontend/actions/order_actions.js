export const OrderConstants = {
  RECEIVE_ORDERS: "RECEIVE_ORDERS"
};

export const receiveOrders = orders => ({
  type: OrderConstants.RECEIVE_ORDERS,
  orders
});
