import { spawn } from 'child_process';
import { stdin, stdout } from 'node:process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SCRIPT_SRC = join(__dirname, 'files/script.js');

const spawnChildProcess = async (args) => {
  const cp = spawn('node', [SCRIPT_SRC, ...args]);
  stdin.pipe(cp.stdin);
  cp.stdout.pipe(stdout);
};

await spawnChildProcess(['--arg1', '--arg2']);
