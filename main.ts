import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });

const entry = "NOTICE: Heating elements unionized. Talks begin at dawn.";

writeFileSync(outputPath, entry, "utf8");