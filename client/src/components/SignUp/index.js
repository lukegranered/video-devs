import React, {useState} from 'react'
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
}
 from './SignUpElements';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const SignUp = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [addUser, { error }] = useMutation(ADD_USER);
    
      // update state based on form input changes
      const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
          ...formState,
          [name]: value,
        });
      };
    
      // submit form
      const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addUser({
            variables: { ...formState },
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };
  return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>VideoDev</Icon>
                <FormContent>
                    <Form onSubmit={handleFormSubmit}>
                        <FormH1>Make a new account.</FormH1>
                        <formLabel htmlFor='username'>Username</formLabel>
                        <FormInput name="username" value={formState.username} onChange={handleChange} type='text' required />
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <FormInput name="email" value={formState.email} onChange={handleChange}type='email' required />
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <FormInput name="password" value={formState.password} onChange={handleChange}type='password' required />
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