export interface FillProps {
  fill?: boolean
}

export interface LayoutProps {
  align?: string
  justify?: string
  basis?: string | number | number[]
  grow?: number
  shrink?: number
}

export interface RowProps extends LayoutProps, FillProps {
  wrap?: string
  justifyContent?: string
  padding?: string | string[]
}
export interface ColumnProps extends LayoutProps, FillProps {
  wrap?: string
}
