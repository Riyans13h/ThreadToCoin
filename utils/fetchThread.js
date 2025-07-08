// utils/fetchXThread.js
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const BEARER_TOKEN = process.env.X_BEARER_TOKEN;

/**
 * Fetches an X thread using the X API (formerly Twitter API)
 * @param {string} tweetId - ID of the first tweet in the thread
 * @returns {Promise<Array>} - Array of ordered tweet objects
 */
export async function fetchXThread(tweetId) {
  if (!BEARER_TOKEN) {
    throw new Error('❌ X API token missing from .env');
  }

  const tweetUrl = `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=author_id,conversation_id`;

  const tweetRes = await fetch(tweetUrl, {
    headers: { Authorization: `Bearer ${BEARER_TOKEN}` }
  });

  if (!tweetRes.ok) {
    throw new Error(`❌ Failed to fetch tweet: ${tweetRes.statusText}`);
  }

  const tweetData = await tweetRes.json();
  const conversationId = tweetData.data.conversation_id;
  const authorId = tweetData.data.author_id;

  const threadUrl = `https://api.twitter.com/2/tweets/search/recent?query=conversation_id:${conversationId} from:${authorId}&tweet.fields=created_at&max_results=100`;

  const threadRes = await fetch(threadUrl, {
    headers: { Authorization: `Bearer ${BEARER_TOKEN}` }
  });

  if (!threadRes.ok) {
    throw new Error(`❌ Failed to fetch thread: ${threadRes.statusText}`);
  }

  const threadJson = await threadRes.json();

  // Sort tweets chronologically
  const thread = threadJson.data.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );

  return thread;
}
