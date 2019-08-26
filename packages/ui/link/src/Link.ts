import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import { Text } from '@ui/text'
import { ITheme } from '@ui/theme'

interface LinkProps {
  href?: string
  hoverColor?: string
  underline?: boolean
  onClick?: () => void
  theme?: ITheme
}

const Link = styled(Text.withComponent('a'), {
  shouldForwardProp: prop =>
    !['lineHeight', 'hoverColor', 'underline'].includes(prop),
})<LinkProps>(
  ({ theme, hoverColor }) => ({
    textDecoration: 'none',
    cursor: 'pointer',
    [':hover']: {
      color: theme.colors[hoverColor],
    },
  }),
  ifProp('underline', {
    textDecoration: 'underline',
    [':hover']: {
      textDecoration: 'none',
    },
  }),
)

const PrimaryLink = styled(Link)`
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 6px 15px;
  border-radius: 5px;
  transition: 0.3s ease;
  :hover {
    border: 1px solid #ffa800;
  }
`
export { Link, PrimaryLink }
