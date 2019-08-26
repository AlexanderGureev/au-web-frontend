import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Layout, Row, Column } from '@ui/layout'
import { Input } from '@ui/input'
import { Space, Text } from '@ui/text'
import { Button } from '@ui/button'
import Avatar from '../../containers/desktop/Avatar'

interface Props {
  firstName?: string
  lastName?: string
  newFirstName: string
  newLastName: string
  editing: boolean
  setEditing: (state) => void
  setNewFirstName: (value) => void
  setNewLastName: (value) => void
  updateProfile: (newProfile) => void
}

const Profile = ({
  firstName,
  lastName,
  newFirstName,
  newLastName,
  setNewFirstName,
  setNewLastName,
  editing,
  setEditing,
  updateProfile,
}: Props) => {
  const handleSubmit = () => {
    setEditing(false)
    updateProfile({ firstName: newFirstName, lastName: newLastName })
  }
  return (
    <Column>
      <Layout basis={60} />
      <Row justify='center'>
        <Text weight='medium' size='l'>
          Personal profile
        </Text>
      </Row>
      <Layout basis={30} />
      <Row justify='center'>
        <Avatar />
      </Row>
      <Layout basis={30} />
      <Row justify='center'>
        <Layout basis={[270, 360]}>
          <Text size='s' weight='bold' transform='uppercase'>
            First name
          </Text>
        </Layout>
      </Row>
      <Layout basis={12} />
      <Row justify='center'>
        <Layout basis={[270, 360]}>
          <Input
            type='text'
            border='lightGray'
            value={editing ? newFirstName : firstName}
            onEnter={handleSubmit}
            onChange={setNewFirstName}
            placeholder='First name'
            disabled={!editing}
          />
        </Layout>
      </Row>
      <Layout basis={24} />
      <Row justify='center'>
        <Layout basis={[270, 360]}>
          <Text size='s' weight='bold' transform='uppercase'>
            Last name
          </Text>
        </Layout>
      </Row>
      <Layout basis={12} />
      <Row justify='center'>
        <Layout basis={[270, 360]}>
          <Input
            type='text'
            border='lightGray'
            value={editing ? newLastName : lastName}
            onEnter={handleSubmit}
            onChange={setNewLastName}
            placeholder='Last name'
            disabled={!editing}
          />
        </Layout>
      </Row>
      <Layout basis={24} />
      <Row justify='center'>
        <Layout basis={[270, 360]}>
          <Button text disabled={false} onClick={() => setEditing(true)}>
            Edit
          </Button>
          <Space count={5} />
          <Button text disabled={!editing} onClick={handleSubmit}>
            Save
          </Button>
        </Layout>
      </Row>
    </Column>
  )
}

export default Profile
