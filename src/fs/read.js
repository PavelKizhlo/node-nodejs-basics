import { readFile } from 'fs/promises'

const FILENAME = './files/fileToRead.txt';

const read = async () => {
  try {
    const content = await readFile(FILENAME, { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed. No such file');
    }

    throw err;
  }
};

await read();
