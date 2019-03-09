const recommendationController = require('../controllers/recommendation.ctrl');

module.exports = (router) => {
    router
    .route('/recommendations')
    .get(recommendationController.getRecommendations);
};