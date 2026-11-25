// SPDX-License-Identifier: MIT
// absurd-invention-pitch: writes one absurd one-sentence invention pitch
// to /output/entry.txt for make.fun's "One-Sentence Absurd Invention Pitch" bounty.
// Node 22, standard library only, no dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised pitch: tightened the wording ("texts a formal condolence" /
// "whenever") without touching the joke's mechanism, so the sentence
// stays one clean line naming the annoyance, the invention and its fix.
const PITCH =
  "The Bereavement Washing Machine texts a formal condolence to the surviving sock whenever it eats its partner, so laundry day finally comes with closure.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
console.log(PITCH);
