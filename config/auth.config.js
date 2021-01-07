
var redis = require('redis');
var JWTR = require('jwt-redis').default;
var redisClient = redis.createClient();
var jwtr = new JWTR(redisClient);
module.exports = {
  secret: "bezkoder-secret-key",
  jwtr
};