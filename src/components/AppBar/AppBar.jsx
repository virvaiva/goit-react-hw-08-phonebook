import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Box, Flex } from '@chakra-ui/react';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      mb={5}
      justifyContent=" space-between "
      alignItems="center"
      padding="10px 50px"
      fontSize="25px"
      w="100%"
      borderBottom="2px solid #c0c0c0"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};

export default AppBar;
