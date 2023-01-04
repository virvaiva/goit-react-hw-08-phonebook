import { useAuth } from 'hooks/useAuth';
import * as SC from './Navigation.styled';
import { AiFillHome } from 'react-icons/ai';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <SC.Nav>
      <SC.StyledLink to="/">
        <AiFillHome size={25} />
      </SC.StyledLink>
      {isLoggedIn && <SC.StyledLink to="/contacts">Phonebook</SC.StyledLink>}
    </SC.Nav>
  );
};
