// zora-sdk/mint.js

import { ZoraProtocolSDK } from '@zoralabs/protocol-sdk';
import { Wallet, JsonRpcProvider } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CHAIN_ID = Number(process.env.CHAIN_ID);
const RPC_URL = process.env.RPC_URL;

if (!PRIVATE_KEY || !CHAIN_ID || !RPC_URL) {
  throw new Error("Missing RPC, PRIVATE_KEY, or CHAIN_ID in .env");
}

const provider = new JsonRpcProvider(RPC_URL);
const wallet = new Wallet(PRIVATE_KEY, provider);

/**
 * Mint thread as NFT on Zora using metadata URI
 * @param {string} metadataURI - ipfs:// CID from upload
 */
export async function mintThreadNFT(metadataURI) {
  const sdk = ZoraProtocolSDK({ signer: wallet, chain: CHAIN_ID });

  const tx = await sdk.mint({
    name: "Thread NFT",
    description: "Minted from ThreadToCoin",
    imageURI: metadataURI,  // or could be an image link
    animationURI: metadataURI, // if it's a JSON
    tags: ['thread', 'knowledge'],
    editionSize: 1
  });

  const receipt = await tx.wait();
  console.log("✅ Minted successfully. TX hash:", receipt.transactionHash);
  return receipt.transactionHash;
}
