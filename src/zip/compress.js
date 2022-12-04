import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_FILENAME = join(__dirname, 'files/fileToCompress.txt');
const DEST_FILENAME = join(__dirname, 'files/archive.gz');

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
