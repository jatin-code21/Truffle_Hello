// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract HelloWorld {
    string public data = "Hello World";

    function setData(string memory _data) public {
        data = _data;
    }

    function getData() public view returns (string memory) {
        return data;
    }
}