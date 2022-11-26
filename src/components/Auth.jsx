const token = localStorage.getItem("token");

const auth = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export default auth;
