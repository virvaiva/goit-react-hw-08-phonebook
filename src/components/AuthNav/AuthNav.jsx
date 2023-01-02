import * as SC from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <SC.Nav>
      <SC.StyledLink to="/register">Register</SC.StyledLink>
      <SC.StyledLink to="/login">Log In</SC.StyledLink>
    </SC.Nav>
  );
};
