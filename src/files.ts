import * as fs from 'fs';
import * as path from 'path';

export default class Files {

   static getCurrentDirectoryBase() {
    return path.basename(process.cwd());

  }

  static fileExists(filePath : string) {
    try {
      return fs.existsSync(filePath);
    } catch (err) {
      return false;
    }
  }

  static directoryExists(filePath : string) {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
}