export const cn = (...classnames: (string | null | undefined)[]): string => {
  return classnames.filter(Boolean).join(' ')
}
