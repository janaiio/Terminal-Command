const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) =>{
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('./', 'newFile.js', 'utf8', (err) => {
    if(err) throw err;

    console.log('Your new file has been successfully created');
  });
};

module.exports.mkdir = () => {
  fs.mkdir('./', { recursive: true }, (err) => {
    if (err) throw err;

    console.log('Your directory has been successfully created');
  });
};
