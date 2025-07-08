// utils/formatThread.js

/**
 * Format a thread for preview or minting.
 *
 * @param {Object} threadData - Raw thread data from fetch or input
 * @param {string} threadData.author - Author name or handle
 * @param {string} threadData.title - Thread title
 * @param {string[]} threadData.tweets - Array of tweet strings
 * @returns {Object} - Formatted object for metadata & UI
 */
export function formatThread(threadData) {
  const { author, title, tweets } = threadData;

  if (!author || !title || !tweets || tweets.length === 0) {
    throw new Error("Invalid thread data. Author, title, and tweets required.");
  }

  // Combine tweets into a single markdown-style paragraph
  const content = tweets.map((t, i) => `${i + 1}. ${t}`).join("\n\n");

  return {
    name: title,
    description: `A collectible Twitter thread by ${author}`,
    creator: author,
    body: content,
    tweetCount: tweets.length,
    createdAt: new Date().toISOString()
  };
}
