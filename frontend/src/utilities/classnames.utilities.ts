/**
 * Utility to remove invalid classnames and merge them into a single string
 *
 * @example
 * ['hey', 'classname '] => 'hey classname'
 */
export function classnames(classNames?: (string | null | undefined | boolean)[]): string {
    if (!classNames) {
      return '';
    }
  
    return classNames
      .filter((className) => !!className)
      .filter((className) => (className as string)?.length !== 0)
      .filter((className) => className !== ' ')
      .join(' ')
      .trim();
  }
  