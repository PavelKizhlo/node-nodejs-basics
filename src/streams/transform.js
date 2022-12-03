import { Transform, pipeline } from 'stream';
import { stdin, stdout } from 'node:process';
import { EOL } from 'os';

class ReverseTransform extends Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, done) {
    const data = chunk
        .toString()
        .split('')
        .reverse()
        .join('')
        .replace(EOL, '');
    this.push(data + EOL)
    done();
  }
}

const transform = async () => {
  const reverseTransform = new ReverseTransform();

  pipeline(
      stdin,
      reverseTransform,
      stdout,
      (err) => {
        throw err;
      }
  )
};

await transform();
