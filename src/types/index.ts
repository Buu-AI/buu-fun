export type GeneralClassName = {
  className?: string;
};

export type BooleanKeys<T> = Extract<
  keyof T,
  {
    [K in keyof T]: T[K] extends boolean ? K : never;
  }[keyof T]
>;

export type TryCatch<T> =
  | {
      data: T;
      error: null;
    }
  | {
      data: null;
      error: string | { message: string };
    };

export type Maybe<T> = T | null | undefined;

export type MaybeString = Maybe<string>;

export type MaybeNumber = Maybe<number>;
