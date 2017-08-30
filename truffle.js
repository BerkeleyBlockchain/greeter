module.exports = {
  networks: {
      //download testrpc and type `testrpc` in your console to start a locally hosted blockchain
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
