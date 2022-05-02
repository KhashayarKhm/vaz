import { _includesExact } from './util'
import { existsSync } from 'fs'
import { argv } from 'process'
import { invalidFileExtension } from './logs'
import { cond, ifElse } from 'ramda'
import { isInSupportedFiles } from './modules/file-system'

function refactorConditions () {
  const currentPath = argv[1 + process.env.ARG_INDEX];
  const newPath = argv[2 + process.env.ARG_INDEX];

  return (
    existsSync(currentPath) &&
    isInSupportedFiles(currentPath) &&
    isInSupportedFiles(newPath)
  );
}

function findException() {
  const currentPath = argv[1 + process.env.ARG_INDEX];
  const newPath = argv[2 + process.env.ARG_INDEX];

  return cond([
  ])
}

(function main() {
  ifElse(refactorConditions, () => { console.log(0) }, findException)
})()
