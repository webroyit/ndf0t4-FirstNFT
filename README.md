# First NFT
First time creating NFT using ERC721. The template is from Dapp University youtube channel.

## What it does?
- You can mint NFT of colors

## Packages
- `@openzeppelin/contracts` a library for secure smart contract development
- `truffle-flattener` concats solidity files
- `chai` for testing
- `bootstrap` CSS framework
- `web3` to interact with ethereum node

## How to use `truffle-flattener`
- Run `./node_modules/.bin/truffle-flattener ./node_modules/@openzeppelin/contracts/token/ERC721/ERC721Full.sol > contracts/ERC721Full.sol` to concats solidity files
- `>` is the name of the file to be created