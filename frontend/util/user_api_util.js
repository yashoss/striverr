export const fetchUser = (id, success, fromProps) => {
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
    success
  });
};
