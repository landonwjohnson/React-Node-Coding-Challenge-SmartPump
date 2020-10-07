const axiosConfig = {
  baseURL: `http://localhost:5000`,
};

function getJWT() {
    return localStorage.getItem("jwt") ? localStorage.getItem("jwt") : false;
}

export { axiosConfig, getJWT };
