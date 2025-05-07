export type BooleanKeys<T> = Extract<
  keyof T,
  {
    [K in keyof T]: T[K] extends boolean ? K : never;
  }[keyof T]
>;
