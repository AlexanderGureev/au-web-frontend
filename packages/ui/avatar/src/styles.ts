import styled from '@emotion/styled'
interface LabelProps {
  size: number
  visible: boolean
}

interface AvatarImgProps {
  src: string
}

interface BtnProps {
  src: string
}
export const AvatarWrapper = styled.div`
  position: relative;
`

export const Label = styled.label<LabelProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 1px dashed rgba(0, 0, 0, 0.2);
  display: block;
  cursor: pointer;
  border-radius: 5px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease;

  &:hover::before,
  &:hover::after {
    background-color: #5b5959;
  }

  ::before,
  ::after {
    display: ${props => (!props.visible ? 'block' : 'none')};
    z-index: 10;
    transition: 0.3s ease;
    background-color: #888;
    border-radius: 5px;
  }

  ::before {
    position: absolute;
    content: "";
    width: ${props => props.size / 3}px;
    height: 2px;
  }

  ::after {
    position: absolute;
    content: "";
    width: 2px;
    height: ${props => props.size / 3}px;
  }
`

export const FileInput = styled.input`
  display: none;
`
export const Text = styled.span`
  position: absolute;
  bottom: 20px;
  color: rgba(0, 0, 0, 0.7);
  width: 100%;
  text-align: center;
  font-size: 12px;
  pointer-events: none;
`
export const AvatarImage = styled.div<AvatarImgProps>`
  border-radius: 5px;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  ::before {
    border-radius: 5px;
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: 0.3s ease;
  }

  :hover > div,
  :hover::before {
    opacity: 1;
  }
`
export const AddBtn = styled.div<BtnProps>`
  padding: 5px;
  margin: 0 10px;
  display: inline-block;
  opacity: 0;
  width: 15px;
  height: 15px;
  background-color: black;
  cursor: pointer;
  transition: 0.3s ease;
  background: url(${props => props.src});
`
export const DeleteBtn = styled(AddBtn)``
