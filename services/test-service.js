const Thrower = require('../util/thrower');

class TestService {
  static async getById(id) {
    const fetch = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id > 0) {
          resolve({ id });
        } else {
          reject(new Error('promise reject'));
        }
      }, 2000);
    });
    if (id > 9000) {
      throw new Thrower('Its over 9000', 400);
    }
    return fetch;
  }
}

module.exports = TestService;
