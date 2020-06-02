// https://github.com/Microsoft/TypeScript/issues/14094#issuecomment-373782604
export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
/**
 * 互斥类型
 */
export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U
