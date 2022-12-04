import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_FILENAME = join(__dirname, 'files/fileToRead.txt');

const read = async () => {
  try {
    const content = await readFile(SRC_FILENAME, { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed. No such file');
    }

    throw err;
  }
};

await read();
