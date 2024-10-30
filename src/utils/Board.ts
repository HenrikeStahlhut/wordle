// import wordBank from "../utils/common_five_letter_words.json";
import wordBank from "../utils/common_five_letter_words.json";

type WordBank = {
  words: string[];
};

interface GenerateWordSetReturn {
  wordSet: Set<string>;
  todaysWord: string;
}

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async (): Promise<GenerateWordSetReturn> => {
  try {
    // Check if wordBank is an array
    if (!Array.isArray(wordBank)) {
      throw new Error("Invalid word bank format: expected string[]");
    }
    // Verify we have words to work with
    if (wordBank.length === 0) {
      throw new Error("Word bank is empty");
    }
    // Generate today's word randomly
    const todaysWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    // Verify we got a valid word
    if (!todaysWord || typeof todaysWord !== "string") {
      throw new Error("Failed to generate valid word");
    }
    // Create a Set from the word array
    const wordSet = new Set(wordBank);

    return { wordSet, todaysWord };
  } catch (error) {
    console.error("Error in generateWordSet:", error);
    throw error;
  }
};
