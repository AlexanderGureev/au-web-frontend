import styled from '@emotion/styled'
import { ITheme } from '@ui/theme'

interface HeaderProps {
  theme?: ITheme
}

const Header = styled.div(({ theme }: HeaderProps) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '40px',
  backgroundColor: theme.colors.white,
  boxShadow: '0 2px 4px 0 rgba(131, 144, 173, 0.15)',
}))

export default Header
