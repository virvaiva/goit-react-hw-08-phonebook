import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button, Flex, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Flex>
      <Text as="i" fontSize="30px" marginRight={5}>
        Welcome, {user.name}!
      </Text>
      <Button
        fontSize="18px"
        colorScheme="red"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        type="button"
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </Flex>
  );
};
