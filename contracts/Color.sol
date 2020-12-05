pragma solidity >=0.4.21 <0.7.0;

import "./ERC721Full.sol";

contract Color is ERC721Full {
  string[] public colors;
  mapping(string => bool) _colorExists;   // For checking that the color is unique

  constructor() ERC721Full("Color", "COLOR") public {}

  // Create a new unique token
  function mint(string memory _color) public {
    // Require unique color
    require(!_colorExists[_color]);

    // Add new color to the array
    uint _id = colors.push(_color);

    // Call _mint() from ERC721Full
    _mint(msg.sender, _id);

    // Color - track it and add it
    _colorExists[_color] = true;
  }
}
