// One Sentence for a Traveler from 1800.
//
// The program writes a single sentence, at most 200 characters, to
// /output/entry.txt. The sentence explains the modern internet to a
// person who has just stepped out of the year 1800, using only pictures
// they already know: roads, the post office, and the library.

import { mkdirSync, writeFileSync } from "node:fs";

// One picture, built only from things a person from 1800 already knows:
// every road, every post office, every library, joined into a single hall.
const sentence =
  "Picture every road, post office, and library in the world joined into one hall, where a letter you write arrives before the ink dries and the shelves hold more books than any library on earth.";

if (sentence.length < 1 || sentence.length > 200) {
  throw new Error(`sentence must be 1-200 characters, got ${sentence.length}`);
}

// Exactly one sentence: a single full stop at the very end, and no other
// sentence-ending mark anywhere inside it.
const inner = sentence.slice(0, -1);
if (!sentence.endsWith(".") || /[.!?]/.test(inner)) {
  throw new Error("sentence must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
console.log(`wrote ${sentence.length} characters to /output/entry.txt`);
