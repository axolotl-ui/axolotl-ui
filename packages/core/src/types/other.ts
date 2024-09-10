export type Optional<T> = {
  [P in keyof T]?: T[P] extends object ? Optional<T[P]> : T[P];
};

export type Range<
  N extends number,
  Result extends number[] = [],
> = Result["length"] extends N
  ? Result[number]
  : Range<N, [...Result, Result["length"]]>;
