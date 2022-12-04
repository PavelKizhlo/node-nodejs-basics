import { open } from 'fs/promises';
import { stdout } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_FILENAME = join(__dirname, 'files/fileToRead.txt');

const read = async () => {
  try {
    const fd = await open(SRC_FILENAME);
    const stream = fd.createReadStream();
    stream.pipe(stdout);
  } catch (err) {
    throw err;
  }
};

await read();
