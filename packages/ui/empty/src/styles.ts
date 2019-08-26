import styled from '@emotion/styled'

interface EmptyProps {
  src: string
}
export const EmptyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Empty = styled.div<EmptyProps>`
  width: 100px;
  height: 100px;
  background: url(${props => props.src});
  background-size: contain;

  @media (max-width: 680px) {
    width: 70px;
    height: 70px;
  }
`
export const Text = styled.div`
  font-size: 14px;
`
