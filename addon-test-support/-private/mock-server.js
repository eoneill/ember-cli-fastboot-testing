import { fetch } from 'whatwg-fetch';

let createMock = async function(path, method, statusCode, response) {
  return await fetch('/__mock-request', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      path,
      method,
      statusCode,
      response
    }),
  });
}

export let mockServer = {
  async get(path, response, status = 200) {
    return createMock(path, "GET", status, response);
  },

  async post(path, response, status = 200) {
    return createMock(path, "POST", status, response);
  },

  async patch(path, response, status = 200) {
    return createMock(path, "PATCH", status, response);
  },

  async put(path, response, status = 200) {
    return createMock(path, "PUT", status, response);
  },

  async delete(path, response, status = 200) {
    return createMock(path, "DELETE", status, response);
  },

  async cleanUp() {
    return fetch('/__cleanup-mocks');
  }
};
