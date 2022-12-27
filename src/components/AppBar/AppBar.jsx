import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedId } = useAuth();
  console.log(isLoggedId);

  return (
    <div>
      <Navigation />
      {isLoggedId ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
