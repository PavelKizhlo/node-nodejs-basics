const parseArgs = () => {
  const allArgs = process.argv.slice(2);
  const pairs = [];

  allArgs.forEach((arg, index, arr) => {
    if (arg.match(/^--/)) {
      pairs.push([arg.slice(2), arr[index + 1]]);
    }
  })

  if (!pairs.length) {
    console.log('No arguments passed !')
  }

  pairs.forEach(pair => {
    const output = `${ pair[0] } is ${ pair[1] }`;
    console.log(output);
  })
};

parseArgs();
