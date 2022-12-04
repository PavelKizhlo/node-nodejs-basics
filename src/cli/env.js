const parseEnv = () => {
  const env = process.env;
  const rssVars = Object.keys(env).filter(prop => prop.match(/^RSS_/));

  if (!rssVars.length) {
    console.log('There are no environment variables with "RSS_" prefix');
  }

  rssVars.forEach(rssVar => {
    const output = `${ rssVar }=${ env[rssVar] }`;
    console.log(output);
  })
};

parseEnv();
