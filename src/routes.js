const routes = (module.exports = require("next-routes")());

routes.add("home", "/", "index").add("testnet", "/about", "testnet");
