import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIRNAME = 'files';
const OLD_PATH = join(__dirname, SRC_DIRNAME, 'wrongFilename.txt');
const NEW_PATH = join(__dirname, SRC_DIRNAME, 'properFilename.md');

const checkFileExists = async (path) => !!(await fs.stat(path).catch(e => false));

const rename = async () => {
  try {
    const oldFilenameExists = await checkFileExists(OLD_PATH);
    const newFilenameExists = await checkFileExists(NEW_PATH);

    if (!oldFilenameExists) {
      throw new Error('FS operation failed. No file to rename');
    }

    if (newFilenameExists) {
      throw new Error('FS operation failed. File with this name already exists');
    }

    await fs.rename(OLD_PATH, NEW_PATH);
    console.log('File was renamed !');
  } catch (err) {
    throw err;
  }
};

await rename();
