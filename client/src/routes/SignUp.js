import React, { useState , useContext} from 'react';
import styled from 'styled-components';
import AxiosApi from '../apis/AxiosApi';
import {AuthContext} from '../context/AuthProvider'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const {login} = useContext(AuthContext)

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await AxiosApi.post( '/signup', {
        username: username,
        email: email,
        password: password,
      })
      response.data.status === 'success' && login(response.data.data.token)
      console.log(response.data.data.token);
      // window.location.href = '/';
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Title>Sign Up</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
      </FormWrapper>
    </Wrapper>
  );
};

export default SignUp;


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const FormWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  background-color: #fff;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  appearance: none;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 12px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Button = styled.button`
  appearance: none;
  background-color: #f60;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 12px;
  width: 100%;

  &:hover {
    background-color: #f90;
  }

  &:active {
    background-color: #f00;
  }
`;

const ErrorMessage = styled.p`
  color: #f00;
  font-size: 14px;
  margin-top: 10px;
`;