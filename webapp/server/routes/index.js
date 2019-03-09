// server/routes/index.js
const recommendation = require('./recommendation');
module.exports = (router) => {
  recommendation(router);
};