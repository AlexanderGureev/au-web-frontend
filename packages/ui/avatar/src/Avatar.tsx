import React, { useState, useRef, useEffect } from 'react'
import {
  AddBtn,
  AvatarImage,
  AvatarWrapper,
  DeleteBtn,
  FileInput,
  Label,
  Text,
} from './styles'
import plusIcon from './img/plus.svg'
import deleteIcon from './img/trash.svg'

const API_URL = process.env.API_URL || 'http://localhost:3000'

interface AvatarProps {
  size?: number
  text?: boolean
  btn?: boolean
  avatarPath: string
  enable?: boolean
  changeAvatar: (file) => void
  deleteAvatar: () => void
}

const Avatar = ({
  size = 128,
  text = true,
  btn = true,
  enable = true,
  avatarPath,
  changeAvatar,
  deleteAvatar,
}: AvatarProps) => {
  const [visible, setVisible] = useState(() => Boolean(avatarPath))
  const inputRef = useRef(null)

  useEffect(() => setVisible(Boolean(avatarPath)), [avatarPath])

  const onChange = async ({ target }) => {
    const [file] = target.files
    changeAvatar(file)
  }
  const handleUpload = ({ target }) => {
    if (!enable) {
      return
    }
    inputRef.current.click()
  }
  const handleDelete = e => deleteAvatar()

  return (
    <AvatarWrapper>
      <Label
        htmlFor='file'
        size={size}
        visible={visible}
        onClick={handleUpload}
      />
      {text && <Text>Upload</Text>}
      <FileInput
        type='file'
        name='file'
        id='file'
        onChange={onChange}
        ref={inputRef}
      />
      {avatarPath && (
        <AvatarImage src={`${API_URL}/${avatarPath}`}>
          {btn && (
            <>
              <AddBtn src={plusIcon} onClick={handleUpload} />
              <DeleteBtn src={deleteIcon} onClick={handleDelete} />
            </>
          )}
        </AvatarImage>
      )}
    </AvatarWrapper>
  )
}

export default Avatar
