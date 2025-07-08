// script.js
import { fetchThread } from './utils/fetchThread.js';
import { formatThread } from './utils/formatThread.js';
import { uploadThreadToIPFS } from './utils/ipfs.js';
import { mintThreadNFT } from './zora-sdk/mint.js';

const btn = document.getElementById('mintBtn');
const input = document.getElementById('tweetUrl');
const status = document.getElementById('status');
const preview = document.getElementById('preview');

btn.addEventListener('click', async () => {
  const url = input.value.trim();
  if (!url) return alert("Please enter a thread URL");

  status.innerText = "🔍 Fetching thread...";
  try {
    const thread = await fetchThread(url);
    const formatted = formatThread(thread);

    // Display preview
    preview.innerHTML = formatted.content;
    preview.classList.remove('hidden');

    status.innerText = "📤 Uploading to IPFS...";
    const ipfsUrl = await uploadThreadToIPFS(formatted);

    status.innerText = "⛓️ Minting on Zora...";
    const tx = await mintThreadNFT(ipfsUrl);

    status.innerText = `✅ Minted! TX: ${tx}`;
  } catch (err) {
    status.innerText = `❌ Error: ${err.message}`;
    console.error(err);
  }
});
