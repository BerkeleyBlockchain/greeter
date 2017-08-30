// exports and deploys greeter
// DO NOT EDIT THE CODE IN THIS FILE
var Greeter = artifacts.require("./Greeter.sol");

module.exports = function(deployer) {
    deployer.deploy(Greeter);
};
