import { _includesExact } from './util'
import { SUPPORTED_FILES } from './constant'
import { existsSync } from 'fs'
import { extname } from 'path'
import { argv } from 'process'

function isInSupportedFiles(file: string): boolean {
  return _includesExact(SUPPORTED_FILES, extname(file))
}

export function main() {
  if (existsSync(argv[1]) && isInSupportedFiles(argv[1])) {

  } else {
  }
}
