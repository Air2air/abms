const fs = require('fs-extra');
const path = require('path');

const externalImageDir = path.resolve(__dirname, '../images'); // Adjust path to your images
const publicImageDir = path.resolve(__dirname, 'public/images');

fs.copySync(externalImageDir, publicImageDir, { overwrite: true });
console.log('External images copied to public/images');