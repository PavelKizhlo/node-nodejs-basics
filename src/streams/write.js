import { open } from 'fs/promises';
import { stdin } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DEST_FILENAME = join(__dirname, 'files/fileToWrite.txt');

const write = async () => {
  try {
    const fd = await open(DEST_FILENAME, 'w');
    const output = fd.createWriteStream();
    stdin.pipe(output);
  } catch (err) {
    throw err;
  }
};

await write();
