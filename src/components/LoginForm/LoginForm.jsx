import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { selectLogInError } from 'redux/auth/selectors';
import { updateErrorLogIn } from 'redux/auth/slice';
import { FiLogIn } from 'react-icons/fi';

import { Button, Input, Box, Flex, Text } from '@chakra-ui/react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectLogInError);

  useEffect(() => {
    dispatch(updateErrorLogIn(error));
    return () => {
      dispatch(updateErrorLogIn(null));
    };
  });

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    let credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(credentials);
    dispatch(logIn(credentials));
    form.reset();
  };
  return (
    <Box>
      <Text fontSize={35} textAlign="center" marginBottom={8}>
        Login Form
      </Text>
      <Flex align="center" justify="center" fontSize={21}>
        <form onSubmit={handleSubmit} autoComplete="off">
          {error && (
            <div>
              Ouch!!! <br></br> You may have made a mistake :( <br></br> Please
              check the entered data...
            </div>
          )}
          <Box marginBottom={5}>
            <label>
              Email<span color="#7c7878">*</span>
            </label>
            <Input
              placeholder="Your Email"
              type="email"
              name="email"
              required
            />
          </Box>
          <Box marginBottom={5}>
            <label>
              Password<span color="#7c7878">*</span>
            </label>
            <Input
              placeholder="Your Password"
              type="password"
              name="password"
              title="minimum number of characters - seven"
              required
            />
          </Box>

          <Button width="100%" colorScheme="teal" size="lg" type="submit">
            Log In
            <Box ml="5">
              <FiLogIn size={28} />
            </Box>
          </Button>
        </form>
      </Flex>
    </Box>
  );
};
export default LoginForm;
