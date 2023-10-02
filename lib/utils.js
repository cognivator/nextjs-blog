/**
 * Created by slhenty on 2023-10-1.
 */

export function nameCase(string) {
  return string && string.split(' ').map(([first, ...rest]) => first.toUpperCase()+rest.join('')).join(' ');
}
