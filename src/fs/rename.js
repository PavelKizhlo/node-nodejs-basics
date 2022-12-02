import * as fs from 'fs/promises';
import { join } from 'path';

const DIRNAME = './files';
const OLD_FILENAME = 'wrongFilename.txt';
const NEW_FILENAME = 'properFilename.md';

const checkFileExists = async (path) => !!(await fs.stat(path).catch(e => false));

const rename = async () => {
  try {
    const oldPath = join(DIRNAME, OLD_FILENAME);
    const newPath = join(DIRNAME, NEW_FILENAME);

    const oldFilenameExists = await checkFileExists(oldPath);
    const newFilenameExists = await checkFileExists(newPath);

    if (!oldFilenameExists) {
      throw new Error('FS operation failed. No file to rename')
    }

    if (newFilenameExists) {
      throw new Error('FS operation failed. File with this name already exists')
    }

    await fs.rename(oldPath, newPath);
    console.log('File was renamed !')
  } catch (err) {
    throw err;
  }
};

await rename();
