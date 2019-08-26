import React, { FC } from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Text } from '@ui/text'
import { Input, TextError } from '@ui/input'
import { Button } from '@ui/button'
import { RouteLink } from '@ui/link'
import messages from '../../messages'

interface Errors {
  email?: string
  password?: string
  confirmPassword?: string
  server?: string
}

interface LoginFormProps {
  intl: InjectedIntl
  email: string
  errors: Errors
  password: string
  onChangeEmail: (value) => void
  onChangePassword: (value) => void
  onLogin: () => void
}

const Login: FC<LoginFormProps> = ({
  email,
  errors,
  intl,
  password,
  onChangeEmail,
  onChangePassword,
  onLogin,
}) => (
  <Column align='center'>
    <Layout basis={60} />
    <Text size='2xl' height='xs' weight='bold'>
      {intl.formatMessage(messages.entrance)}
    </Text>
    <Layout basis={40} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.mail)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Column>
          <Input
            type='email'
            border='lightGray'
            error={Boolean(errors.email)}
            value={email}
            onChange={onChangeEmail}
            placeholder={intl.formatMessage(messages.enterEmail)}
          />
          <TextError>{errors.email}</TextError>
        </Column>
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Text size='s' weight='bold' transform='uppercase'>
          {intl.formatMessage(messages.password)}
        </Text>
      </Layout>
    </Row>
    <Layout basis={12} />
    <Row justify='center'>
      <Layout basis={360}>
        <Column>
          <Input
            type='password'
            border='lightGray'
            error={Boolean(errors.password)}
            value={password}
            onEnter={onLogin}
            onChange={onChangePassword}
            placeholder={intl.formatMessage(messages.enterPassword)}
          />
          <TextError>{errors.password}</TextError>
        </Column>
      </Layout>
    </Row>
    <Layout basis={24} />
    <Row justify='center'>
      <Layout basis={360}>
        <Button
          text
          disabled={Boolean(
            errors.email || errors.password || !email || !password,
          )}
          onClick={onLogin}
        >
          {intl.formatMessage(messages.login)}
        </Button>
      </Layout>
    </Row>
    <Layout basis={16} />
    <RouteLink
      to='/auth/registration'
      size='s'
      height='xs'
      weight='medium'
      color='black'
      hoverColor='blueBayoux'
    >
      {intl.formatMessage(messages.registration)}
    </RouteLink>
  </Column>
)

export default injectIntl(Login)
