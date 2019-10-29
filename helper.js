const fs = require('fs-extra');

module.exports = function(f, i, d) {
  const pathRegex = /"\/Users[^"]+\/arrow\/([^"]+)"/g;
  const fnStr = f.toString();
  const matches = pathRegex.exec(fnStr);
  let farg;
  if (!matches) {
    farg = fnStr;
  } else {
    const filePath = matches[1];
    farg = `require('./${filePath}')`
    fs.outputFile(filePath, `module.exports = ${fnStr}`)
  }
  console.log(`__d(${farg}, ${i}, ${JSON.stringify(d)});`)
}