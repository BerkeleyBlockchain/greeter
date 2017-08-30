var Greeter = artifacts.require("./Greeter.sol");

contract('Greeter', function(accounts) {
  const args = {_greeting: "test greeting"}; //TODO: don't hard code test values
  it("should use the greeter constructor to set a greeting", function() {
    return Greeter.deployed()
      .then(function(instance) {
        /* CALL the greet function */
        instance.greeter("test greeting");
        return instance.greet.call();
      })
      .then(function(result) {
        assert.equal(args._greeting, result, "greeting should match constructor argument")
      })
  });
});
