import type { Dayjs, extend, isDayjs, locale, unix } from './dayjs'

export type DateInput =
  | Dayjs
  | Date
  | string
  | number
  | number[]
  | null
  | undefined
  | object
export type FormatOption = string | string[]
export interface ParseOptions {
  format?: FormatOption
  locale?: string
  strict?: boolean
}

export interface DayjsFn {
  (
    date?: DateInput,
    format?: FormatOption,
    locale?: boolean,
    strict?: boolean
  ): Dayjs
  (date?: DateInput, format?: FormatOption, strict?: boolean): Dayjs
  isDayjs: typeof isDayjs
  unix: typeof unix
  extend: typeof extend
  locale: typeof locale
}

export type Plugin<T = never> = ((
  cls: typeof Dayjs,
  fn: DayjsFn,
  option?: T
) => void) & {
  /** installed */
  _i?: boolean
}

export type PluginOption<T extends Plugin<any>> = T extends Plugin<infer O>
  ? O
  : T

export interface Extend {
  // eslint-disable-next-line @typescript-eslint/no-misused-new
  new (): Extend
}
