import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Button, Input, Box, Flex, Text } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box>
      <Text fontSize={35} textAlign="center" marginBottom={8} backgroundColor>
        Register Form
      </Text>
      <Flex align="center" justify="center" fontSize={21}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Box marginBottom={5}>
            <label>
              Login<span color="#7c7878">*</span>
            </label>
            <Input
              placeholder="Your Login"
              size="md"
              type="text"
              name="name"
              required
            />
          </Box>
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
            Register
          </Button>
        </form>
      </Flex>
    </Box>
  );
};
