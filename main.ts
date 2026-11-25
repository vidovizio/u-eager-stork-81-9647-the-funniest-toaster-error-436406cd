import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
const outputPath = join(outputDir, "entry.txt");

const ENTRY_TEXT = "NOTICE: Heating elements unionized. Talks begin at dawn.";

function writeEntry(path: string, text: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry(outputPath, ENTRY_TEXT);

const written = readFileSync(outputPath, "utf8");
if (written !== ENTRY_TEXT) {
  console.error("VERIFICATION FAILED: written content mismatch");
  process.exit(1);
}
console.error(`VERIFIED: ${ENTRY_TEXT.length} characters written`);