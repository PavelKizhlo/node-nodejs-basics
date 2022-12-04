import { createReadStream } from 'fs';
import { stdout } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const { createHash } = await import('node:crypto');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_FILENAME = join(__dirname, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream(SRC_FILENAME);

  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
