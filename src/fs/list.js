import { readdir } from "fs/promises";

const DIRNAME = './files';

const list = async () => {
  try {
    const files = await readdir(DIRNAME);

    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error('FS operation failed. No such directory');
    }

    throw err;
  }
};

await list();
