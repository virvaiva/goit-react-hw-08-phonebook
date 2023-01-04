import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Button, Flex, Text, Box } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';

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
        p="5"
        rounded="md"
        type="button"
        onClick={handleLogOut}
      >
        Logout
        <Box ml="5">
          <FiLogOut size={28} />
        </Box>
      </Button>
    </Flex>
  );
};
