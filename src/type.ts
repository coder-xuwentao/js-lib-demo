export function type<T>(data: T): string {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
