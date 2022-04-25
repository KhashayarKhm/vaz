export function isDef (value: unknown): boolean {
  return  value !== undefined && value !== null;
}

export function includesByKey<T>(list: T[], item: T, key: string | number): boolean {
  return list.findIndex(item[key]) !== -1;
}

export function includes<T>(list: T[], item: T): boolean {
  return list.findIndex(item) !== -1;
}


