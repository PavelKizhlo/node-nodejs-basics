import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const SRC_FILENAME = './files/archive.gz';
const DEST_FILENAME = './files/fileToCompress.txt';

const decompress = async () => {
  try {
    const input = createReadStream(SRC_FILENAME);
    const gzip = createGunzip();
    const output = createWriteStream(DEST_FILENAME);

    input.pipe(gzip).pipe(output);
  } catch (err) {
    throw err;
  }
};

await decompress();
