import React from 'react'
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
interface RegistrationFormProps {
  intl: InjectedIntl
  confirmPassword: string
  email: string
  errors: Errors
  password: string
  onChangeConfirmPassword: (valueA, valueB) => void
  onChangeEmail: (value) => void
  onChangePassword: (value) => void
  onRegister: () => void
}

const Registration = ({
  confirmPassword,
  email,
  errors,
  intl,
  password,
  onChangeConfirmPassword,
  onChangeEmail,
  onChangePassword,
  onRegister,
}: RegistrationFormProps) => {
  return (
    <>
      <Column align='center'>
        <Layout basis={60} />
        <Text size='2xl' height='xs' weight='bold'>
          {intl.formatMessage(messages.registration)}
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
                onEnter={onRegister}
                onChange={onChangePassword}
                placeholder={intl.formatMessage(messages.enterPassword)}
              />
              <TextError>{errors.password}</TextError>
            </Column>
          </Layout>
        </Row>
        <Layout basis={12} />
        <Row justify='center'>
          <Layout basis={360}>
            <Column>
              <Input
                type='password'
                border='lightGray'
                error={Boolean(errors.confirmPassword)}
                value={confirmPassword}
                onEnter={onRegister}
                onChange={value => onChangeConfirmPassword(value, password)}
                placeholder={intl.formatMessage(messages.repeatPassword)}
              />
              <TextError>{errors.confirmPassword}</TextError>
            </Column>
          </Layout>
        </Row>
        <Layout basis={24} />
        <Row justify='center'>
          <Layout basis={360}>
            <Button
              text
              disabled={Boolean(
                errors.email ||
                  errors.password ||
                  errors.confirmPassword ||
                  !email ||
                  !password ||
                  !confirmPassword,
              )}
              onClick={onRegister}
            >
              {intl.formatMessage(messages.register)}
            </Button>
          </Layout>
        </Row>
        <Layout basis={16} />
        <RouteLink
          to='/auth'
          size='s'
          height='xs'
          weight='medium'
          color='black'
          hoverColor='blueBayoux'
        >
          {intl.formatMessage(messages.login)}
        </RouteLink>
      </Column>
    </>
  )
}

export default injectIntl(Registration)
