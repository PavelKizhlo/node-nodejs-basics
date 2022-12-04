import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const SRC_FILENAME = './files/fileToCompress.txt';
const DEST_FILENAME = './files/archive.gz';

const compress = async () => {
  try {
    const input = createReadStream(SRC_FILENAME);
    const gzip = createGzip();
    const output = createWriteStream(DEST_FILENAME);

    input.pipe(gzip).pipe(output);
  } catch (err) {
    throw err;
  }
};

await compress();
