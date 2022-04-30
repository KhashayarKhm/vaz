import { is, includes } from 'ramda'

export function _isString(value: unknown): value is string {
  return is(String, value)
}

export function _includes<T>(list: T[], searchFn: (item: T, index: number, array: T[]) => boolean): boolean {
  return list.findIndex(searchFn) !== -1;
}

export function _includesExact<T>(list: T[], item: T): boolean {
  if (_isString(item)) {
    return _includes<T>(list, _item => item === _item)
  }
  return includes(item, list)
}
