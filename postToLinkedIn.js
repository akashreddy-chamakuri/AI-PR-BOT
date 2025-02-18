const { generateContent } = require("./utils/aiHelper");
const { postToLinkedIn } = require("./utils/linkedinHelper");

async function main() {
  const postContent = await generateContent("Write a professional LinkedIn post about AI and automation.");
  console.log("📢 AI-Generated Post:", postContent);

  if (postContent) {
    await postToLinkedIn(postContent);
  }
}

main();
