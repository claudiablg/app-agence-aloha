/**
 * ['hey', 'classname '] => 'hey classname'
 */
export function getMergedClassname(classNames?: (string | null | undefined | boolean)[]): string {
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
  