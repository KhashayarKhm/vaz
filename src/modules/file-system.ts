import { extname } from "path";
import { SUPPORTED_FILES } from "src/constant";
import { _includesExact } from "src/modules/utils";

export function isInSupportedFiles(path: string): boolean {
  return _includesExact(SUPPORTED_FILES, extname(path))
}
