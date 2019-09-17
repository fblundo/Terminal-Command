const fs = require('fs');
 
module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
     return `${acc} ${file} `;
   }, '');

   console.log(filesToString);
  });
};

module.exports.touch = (filename) => {
  fs.open(filename, 'a', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
  })
};

module.exports.mkdir = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
    console.log('Directory created');
  } else {
    console.log('Directory already exists');
  }
};
