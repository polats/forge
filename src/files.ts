import * as fs from 'fs'
import * as path from 'path'

export namespace Files {
  export function getCurrentDirectoryBase() {
    return path.basename(process.cwd())
  }

  export function fileExists(filePath : string) {
    try {
      return fs.existsSync(filePath)
    } catch (err) {
      console.log(err);
      return false
    }
  }

  export function directoryExists(filePath : string) {
    try {
      return fs.statSync(filePath).isDirectory()
    } catch (err) {
      console.log(err);
      return false
    }
  }
}
