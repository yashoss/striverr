export const UserConstants = {
  REQUEST_USER: "REQUEST_USER",
  RECEIVE_USER: "RECEIVE_USER"
};

export const requestUser = (id) => ({
  type: UserConstants.REQUEST_USER,
  id
});

export const receiveUser = (user) => ({
  type: UserConstants.RECEIVE_USER,
  user
});
