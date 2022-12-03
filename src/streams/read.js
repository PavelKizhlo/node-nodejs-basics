import { open } from 'fs/promises';
import { stdout } from 'node:process';

const SRC_FILENAME = './files/fileToRead.txt';

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
