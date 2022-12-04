import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIRNAME = join(__dirname, 'files');

const list = async () => {
  try {
    const files = await readdir(SRC_DIRNAME);

    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed. No such directory');
    }

    throw err;
  }
};

await list();
