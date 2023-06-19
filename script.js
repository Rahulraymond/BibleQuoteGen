// Array of Bible quotes
const bibleQuotes = [
  "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
  "The Lord is my shepherd; I shall not want. - Psalm 23:1",
  "Trust in the Lord with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
  "I can do all things through him who strengthens me. - Philippians 4:13",
  "Delight yourself in the Lord, and he will give you the desires of your heart. - Psalm 37:4",
  "Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you. - Deuteronomy 31:6",
  "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid? - Psalm 27:1",
  // Add more Bible quotes here
];

// Function to generate a random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * bibleQuotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = bibleQuotes[randomIndex];

  const shareInput = document.getElementById("share-input");
  const quoteText = quoteElement.textContent;
  const shareLink = `https://rahulraymond.github.io/BibleQuoteGen?quote=${encodeURIComponent(quoteText)}`;
  shareInput.value = shareLink;
}

// Function to copy the share link to the clipboard
function copyToClipboard() {
  const shareInput = document.getElementById("share-input");
  shareInput.select();
  shareInput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  alert("Share link copied to clipboard!");
}

// Add click event listeners
document.getElementById("generate-btn").addEventListener("click", generateQuote);
document.getElementById("share-btn").addEventListener("click", copyToClipboard);

// Generate initial quote on page load
generateQuote();
