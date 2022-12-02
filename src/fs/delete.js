import { unlink } from 'fs/promises';

const FILENAME = './files/fileToRemove.txt';

const remove = async () => {
  try {
    await unlink(FILENAME);
    console.log('File was removed')
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed. No such file')
    }
  }
};

await remove();
