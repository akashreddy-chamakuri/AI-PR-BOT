const { generateContent } = require("./utils/aiHelper");
const { postToTwitter } = require("./utils/twitterHelper");

async function main() {
  const tweetContent = await generateContent("Write a short, engaging tweet about AI.");
  console.log("📢 AI-Generated Tweet:", tweetContent);

  if (tweetContent) {
    await postToTwitter(tweetContent);
  }
}

main();
