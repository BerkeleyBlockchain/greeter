pragma solidity ^0.4.11;
contract Greeter {

    string greeting; //global variable that our greeter will say when poked

    /*
     * Constructor function
     */
    /// @dev Contract constructor that sets the global `greeting` variable
    /// @param _greeting A String value to set to the global `greeting`
    function greeter(string _greeting) public {
        
    }

    /*
     * Greet function
     */
    /// @dev returns the String value stored in the global `greeting` variable
    function greet() constant returns (string) {

    }
}
