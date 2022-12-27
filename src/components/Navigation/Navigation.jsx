import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Phonebook</NavLink>}
    </div>
  );
};
