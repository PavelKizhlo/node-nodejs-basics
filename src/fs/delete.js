import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_FILENAME = join(__dirname, 'files/fileToRemove.txt');

const remove = async () => {
  try {
    await unlink(SRC_FILENAME);
    console.log('File was removed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed. No such file');
    }
  }
};

await remove();
