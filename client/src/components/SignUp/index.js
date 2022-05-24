import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SignUpElements';

const SignUp = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>VideoDev</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Make a new account.</FormH1>
                        <formLabel htmlFor='for'>Username</formLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Sign Up!</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignUp