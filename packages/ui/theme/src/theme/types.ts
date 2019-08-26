import { IColors } from './colors'
import { IFontFamily } from './fontFamily'

export interface ThemeBorderRadius extends Array<number> {
  s?: number
  n?: number
  m?: number
}

export interface ThemeFontSizes extends Array<number> {
  s?: number
  n?: number
  m?: number
  l?: number
  xl?: number
  '2xl'?: number
  '3xl'?: number
}

export interface ThemeFontWeights extends Array<number> {
  light?: number
  normal?: number
  medium?: number
  bold?: number
}

export interface ThemeLineHeights extends Array<number> {
  xs?: number
  s?: number
  m?: number
  l?: number
}

export interface ITheme {
  borderRadius: ThemeBorderRadius
  fontFamily: IFontFamily
  fontSizes: ThemeFontSizes
  fontWeights: ThemeFontWeights
  colors: IColors
  lineHeights: ThemeLineHeights
}
