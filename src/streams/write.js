import { open } from 'fs/promises';
import { stdin } from 'node:process';

const DEST_FILENAME = './files/fileToWrite.txt';

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
