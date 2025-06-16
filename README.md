# ThreadToCoin
ThreadToCoin is a lightweight web app that lets users convert high-value Twitter threads into NFTs (coins) using the Zora platform. Writers, educators, and creators can mint their threads as collectible, ownable content—preserving their knowledge, building reputation, and earning support.
Here’s a polished and professional `README.md` file for your **ThreadToCoin** project using **X (formerly Twitter) API** and **Zora Protocol**.

---

```markdown
# 🧵 ThreadToCoin

**ThreadToCoin** is a lightweight decentralized web app that lets users convert valuable threads from [X (formerly Twitter)](https://x.com) into on-chain digital collectibles using the [Zora](https://zora.co/) minting protocol. Writers, educators, and creators can turn their knowledge into ownable, supportable assets — preserving their impact while building on-chain reputation.

---

## 🚀 Features

- ✨ **Fetch X Threads** — Retrieve threads using the official X API v2
- 🧠 **Format and Preview** — Clean and display threads as collectibles
- 📦 **Upload to IPFS** — Store content immutably using `nft.storage`
- ⛓️ **Mint on Zora** — Create NFTs/Coins via the Zora Protocol
- 🦊 **Wallet Integration** — Sign and mint via MetaMask or WalletConnect

---


## 🔧 Setup Instructions

### 1. Clone and Install

```bash
git clone https://github.com/yourname/ThreadToCoin.git
cd ThreadToCoin
npm install
````

### 2. Configure Environment

Create a `.env` file:

```env
X_BEARER_TOKEN=your_x_api_token_here
NFT_STORAGE_API_KEY=your_nft_storage_key
```

### 3. Run the App

```bash
npm start
```

Then open `index.html` in your browser (or serve with Vite/Live Server for development).

---

## 💡 Usage Flow

1. 🔗 Paste an X (Twitter) thread URL or tweet ID
2. 📜 Preview the entire thread as a collectible
3. 📤 Upload to IPFS with metadata
4. ⛓️ Connect wallet and mint via Zora Protocol
5. 💸 Your thread is now on-chain and shareable!

---

## 🧱 Built With

* [X API v2](https://developer.twitter.com/) – To fetch threads
* [nft.storage](https://nft.storage/) – IPFS + Filecoin content storage
* [Zora Protocol](https://docs.zora.co/) – NFT minting and metadata schema
* [Viem](https://viem.sh/) / [Ethers.js](https://docs.ethers.org/) – Wallet and chain interaction

---

## 🧪 Test Script

To test X thread fetch directly:

```bash
node utils/test_fetch_x.js
```

---

## 📜 License

MIT License © 2025 \[Riyansh Sachan]

---

## 🙌 Credits

Inspired by encode club , Zora Coinathon .
```
