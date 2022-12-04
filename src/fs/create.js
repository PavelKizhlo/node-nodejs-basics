import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DEST_FILENAME = join(__dirname, 'files/fresh.txt');

const create = async () => {
  try {
    await writeFile(DEST_FILENAME, 'I am fresh and young', { flag: 'wx' });
    console.log('File was created !');
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed. File already exists');
    }
    throw err;
  }
};

await create();
