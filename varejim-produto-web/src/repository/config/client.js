import http from "./http";

const client = {
  post: async (url, payload) => {
    return new Promise((resolve, reject) => {
      http
        .post(url, payload)
        .then((suc) => {
          resolve(suc.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  
  put: async (url, payload) => {
    return new Promise((resolve, reject) => {
      http
        .put(url, payload)
        .then((suc) => {
          resolve(suc.data);
        })
        .catch((err) => {
          reject(err.response.data.errors);
        });
    });
  },

  get: (url, params) => {
    return new Promise((resolve, reject) => {
      http
        .get(url, { params: params })
        .then((suc) => {
          resolve(suc.data);
        })
        .catch((err) => {
          reject(err.response.data.errors);
        });
    });
  },
  delete: async (url, params) => {
    return new Promise((resolve, reject) => {
      http
        .delete(url+"/"+params)
        .then((suc) => {
          resolve(suc.data);
        })
        .catch((err) => {
          reject(err.response.data.errors);
        });
    });
  },
};
export default client;
