pragma solidity >=0.4.21 <0.7.0;

import "./ERC721Full.sol";

contract Color is ERC721Full {
  constructor() ERC721Full("Color", "COLOR") public {
  }
}
