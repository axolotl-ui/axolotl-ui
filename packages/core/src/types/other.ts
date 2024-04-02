export type { VariantProps } from 'cva'

export type AnyButNot = string | boolean | number | null | undefined

export type Optional<T> = {
  [P in keyof T]?: T[P] extends object ? Optional<T[P]> : T[P]
}
