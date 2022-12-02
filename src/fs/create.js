import { writeFile } from 'fs/promises';

const FILENAME = './files/fresh.txt';

const create = async () => {
  try {
    await writeFile(FILENAME, 'I am fresh and young', { flag: 'wx' });
    console.log('File was created !')
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed. File already exists')
    }
    throw err;
  }
};

await create();
