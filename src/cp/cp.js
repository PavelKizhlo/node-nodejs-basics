import { spawn } from 'child_process';
import { stdin, stdout } from 'node:process';

const spawnChildProcess = async (args) => {
  const cp = spawn('node', ['./files/script.js', ...args])
  stdin.pipe(cp.stdin);
  cp.stdout.pipe(stdout);
};

await spawnChildProcess(['--arg1', '--arg2']);
