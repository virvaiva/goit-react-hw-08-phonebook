import { useAuth } from 'hooks/useAuth';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <SC.Nav>
      <SC.StyledLink to="/">Home</SC.StyledLink>
      {isLoggedIn && <SC.StyledLink to="/contacts">Phonebook</SC.StyledLink>}
    </SC.Nav>
  );
};
