// utils/ipfs.js (npm install dotenv nft.storage)


import { NFTStorage, File } from 'nft.storage';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const NFT_STORAGE_KEY = process.env.NFT_STORAGE_KEY;

if (!NFT_STORAGE_KEY) {
  throw new Error("Missing NFT_STORAGE_KEY in .env file");
}

const client = new NFTStorage({ token: NFT_STORAGE_KEY });

/**
 * Upload formatted thread metadata to IPFS.
 * @param {Object} metadata - The formatted thread (from formatThread).
 * @returns {Promise<string>} CID or URL
 */
export async function uploadThreadToIPFS(metadata) {
  const blob = new Blob([JSON.stringify(metadata)], { type: 'application/json' });
  const file = new File([blob], 'thread.json', { type: 'application/json' });

  const cid = await client.storeBlob(file);
  return `ipfs://${cid}`;
}
