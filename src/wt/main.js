import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WORKER_SRC = join(__dirname, 'worker.js');

const performCalculations = async () => {
  let incrementalNum = 10;
  const cores = cpus().length;
  const results = [];

  for (let i = 0; i < cores; i++) {
    const calculation = new Promise((resolve, reject) => {
      const worker = new Worker(WORKER_SRC, { workerData: incrementalNum++ });
      worker.on('message', resolve);
      worker.on('error', reject);
    })
        .then(data => ({
          status: 'resolved',
          data
        }))
        .catch(err => ({
          status: 'error',
          data: null
        }));

    results.push(calculation);
  }

  console.log(await Promise.all(results));
};

await performCalculations();
