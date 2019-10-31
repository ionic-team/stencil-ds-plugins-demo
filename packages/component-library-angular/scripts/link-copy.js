const fs = require('fs-extra');
const path = require('path');


prjDir = path.join(__dirname, '..', '..', 'app-angular');

copyPackage(prjDir, 'component-library-angular');
copyPackage(prjDir, 'component-library');


function copyPackage(prjDir, pkgName) {
  const prjDest = path.join(prjDir, 'node_modules', pkgName);

  const pkgSrcDir = path.join(__dirname, '..', '..', pkgName);
  const pkgJsonPath = path.join(pkgSrcDir, 'package.json');
  const pkgJson = require(pkgJsonPath);

  // make sure this local project exists
  try {
    const destStats = fs.statSync(prjDest);

    try {
      fs.unlinkSync(prjDest);
      console.log(`${prjDest} is a symlink, recreating as a directory`);
      fs.mkdirSync(prjDest);
    } catch(e) {
      if (destStats.isDirectory()) {
        console.log(`${prjDest} is a directory, emptying contents`);
        fs.emptyDirSync(prjDest);
      }
    }

  } catch (e) {
    console.log(`creating directory ${prjDest}`);
    fs.mkdirSync(prjDest);
  }

  pkgJson.files.push('package.json');

  pkgJson.files.forEach(f => {
    const src = path.join(pkgSrcDir, f);
    const dest = path.join(prjDest, f);

    console.log('copying:', src, 'to', dest);
    fs.copySync(src, dest);
  });
}