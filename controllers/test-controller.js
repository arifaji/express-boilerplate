const TestService = require('../services/test-service');

class TestController {
  static async getTestById(req, res) {
    const fetch = await TestService.getById(req.params.id);
    res.json({
      success: true,
      data: fetch,
    });
  }
}

module.exports = TestController;
