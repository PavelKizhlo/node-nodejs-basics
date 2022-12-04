import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_FILENAME = join(__dirname, 'files/archive.gz');
const DEST_FILENAME = join(__dirname, 'files/fileToCompress.txt');

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
